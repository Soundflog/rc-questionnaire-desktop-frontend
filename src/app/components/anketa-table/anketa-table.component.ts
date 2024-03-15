import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {IForm} from "../../models/form";
import {QuestionType} from "../../models/question";
import {IVariant} from "../../models/variant";

@Component({
  selector: 'app-anketa-table',
  templateUrl: './anketa-table.component.html',
  styleUrls: ['./anketa-table.component.css', './anketa-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnketaTableComponent implements OnInit {
  @Input() form: IForm;

  surveyForm: FormGroup;
  lengthVariants = 0;
  maxScoreVariants = 0;

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({});
  }

  ngOnInit() {
    // Добавление FormControl для каждого вопроса в форме
    this.form.questions.forEach(question => {
      let questionGroup: FormGroup;

      switch (question.type) {
        case QuestionType.SINGLE_CHOICE: // Поле для выбора одного варианта ответа
          // FormGroup
          questionGroup = this.fb.group({
            content: [question.content, Validators.required],
            type: [question.type, Validators.required],
            variants: this.fb.group({
              id: [question.variants[0].id, Validators.required]
            })
          });
          break;
        case QuestionType.SCALE: // Шкала ответов
          questionGroup = this.fb.group({
            content: [question.content, Validators.required],
            type: [question.type, Validators.required],
            variants: this.fb.group({
              score: [question.variants[0].score, Validators.required]
            })
          });
          this.lengthVariants = question.variants.length;
          // Доверяем тому что в конце массива будет лежать максимальный score у варианта
          this.maxScoreVariants = question.variants[question.variants.length - 1].score;
          break;
        default: // Поле для выбора нескольких вариантов ответа
          // FormArray для вариантов ответа
          questionGroup = this.fb.group({
            content: [question.content, Validators.required],
            type: [question.type, Validators.required],
            variants: this.fb.array([])
          });
          question.variants.forEach(variant => {
            (questionGroup.get('variants') as FormArray).push(
              this.fb.group({
                id: [variant.id],
                content: [variant.content, Validators.required],
                answer: [false, Validators.required],
              })
            );
          });
          break;
      }

      this.surveyForm.addControl(`question_${question.id}`, questionGroup);
    });

    console.log(this.surveyForm)
  }

  scalePatchValue(newVariant: IVariant) {
    Object.keys(this.surveyForm.controls).forEach((questionKey) => {
      const questionGroup = this.surveyForm.get(questionKey) as FormGroup;
      const questionType = (questionGroup.get('type') as FormControl).value;

      if (questionType === QuestionType.SCALE) {
        const variants = questionGroup.get('variants') as FormGroup;
        variants.patchValue({
          score: newVariant.score
        });
      }
    });
  }

  sendSurvey() {
    // Отправьте данные формы на сервер
    console.log(this.surveyForm.value);
    const selectedVariantIds = this.getSelectedVariantIds();
    console.log(selectedVariantIds);
  }

  // Необходимо при отправке данных на сервер создать List Id из вариантов в которых отмеченные (answer=true)
  // возвращает list id вариантов
  getSelectedVariantIds(): number[] {
    const selectedVariantIds: number[] = [];

    Object.keys(this.surveyForm.controls).forEach((questionKey) => {
      const questionGroup = this.surveyForm.get(questionKey) as FormGroup;
      const questionType = (questionGroup.get('type') as FormControl).value;

      if (questionType === QuestionType.SINGLE_CHOICE) {
        const selectedVariantId = (questionGroup.get('variants.id') as FormControl).value;
        selectedVariantIds.push(selectedVariantId);
      } else if (questionType === QuestionType.SCALE) {
        // TODO: Scale подсчет
        const selectedScore = (questionGroup.get('variants.score') as FormControl).value;

        const question = this.form.questions.find(q => q.id === +questionKey.split('_')[1]);
        if (question) {
          const selectedVariant = question.variants.find(v => v.score === selectedScore);
          if (selectedVariant) {
            selectedVariantIds.push(selectedVariant.id);
          }
        }
      } else {
        const variantsArray = questionGroup.get('variants') as FormArray;
        variantsArray.controls.forEach((variantGroup) => {
          const variantId = (variantGroup.get('id') as FormControl).value;
          const variantAnswer = (variantGroup.get('answer') as FormControl).value;

          if (variantAnswer) {
            selectedVariantIds.push(variantId);
          }
        });
      }
    });

    return selectedVariantIds;
  }


  protected readonly QuestionType = QuestionType;
  protected readonly length = length;
}

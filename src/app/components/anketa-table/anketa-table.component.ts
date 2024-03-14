import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {IForm} from "../../models/form";
import {QuestionType} from "../../models/question";

@Component({
  selector: 'app-anketa-table',
  templateUrl: './anketa-table.component.html',
  styleUrls: ['./anketa-table.component.css', './anketa-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnketaTableComponent implements OnInit {
  @Input() form: IForm;

  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({});
  }

  ngOnInit() {
    // Добавление FormControl для каждого вопроса в форме
    this.form.questions.forEach(question => {
      let questionGroup: FormGroup;

      if (question.type === QuestionType.SINGLE_CHOICE) {
        // Поле для выбора одного варианта ответа
        // FormGroup
        questionGroup = this.fb.group({
          content: [question.content, Validators.required],
          type: [question.type, Validators.required],
          variants: this.fb.group({})
        });
        (questionGroup.get('variants') as FormGroup).addControl(
          "id", this.fb.control(question.variants[0].id, Validators.required)
        );
      } else {
        // Поле для выбора нескольких вариантов ответа
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
      }

      this.surveyForm.addControl(`question_${question.id}`, questionGroup);
    });

    console.log(this.surveyForm)

    console.log(this.surveyForm)

  }

  private addFormControls() {
    // Добавьте контролы в форму для каждого вопроса
    if (this.form && this.form.questions) {
      this.form.questions.forEach((question) => {
        if (question.variants) {
          question.variants.forEach((variant) => {
            this.surveyForm.addControl(String(variant.id + "variant"), this.fb.control(variant.answer));
          });
        }
      });
    }
  }

  sendSurvey() {
    // Отправьте данные формы на сервер
    console.log(this.surveyForm.value);
    const selectedVariantIds = this.getSelectedVariantIds();
    console.log(selectedVariantIds);
  }

  // Необходимо при отправке данных на сервер создать List Id из вариантов в которых отмеченные (answer=true)
  // возвращает list id вариантов
  /*getSelectedVariantIds(): number[] {
    const selectedVariantIds: number[] = [];

    const formValue = this.surveyForm.value;

    Object.keys(formValue).forEach((questionKey) => {
      const questionValue = formValue[questionKey];

      if (questionValue && questionValue.variants) {
        questionValue.variants.forEach((variant: { id: number, answer: boolean }) => {
          if (variant.answer) {
            selectedVariantIds.push(variant.id);
          }
        });
      }
    });

    return selectedVariantIds;
  }*/
  getSelectedVariantIds(): number[] {
    const selectedVariantIds: number[] = [];

    Object.keys(this.surveyForm.controls).forEach((questionKey) => {
      const questionGroup = this.surveyForm.get(questionKey) as FormGroup;
      const questionType = (questionGroup.get('type') as FormControl).value;

      if (questionType === QuestionType.SINGLE_CHOICE) {
        const selectedVariantId = (questionGroup.get('variants.id') as FormControl).value;
        selectedVariantIds.push(selectedVariantId);
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


}

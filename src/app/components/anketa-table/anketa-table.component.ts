import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {IForm} from "../../models/form";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-anketa-table',
  templateUrl: './anketa-table.component.html',
  styleUrls: ['./anketa-table.component.css', './anketa-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnketaTableComponent implements OnInit{
  @Input() form: IForm;

  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
    });
  }

  ngOnInit() {
    // Добавление FormControl для каждого вопроса в форме
    this.form.questions.forEach(question => {
      const questionGroup = this.fb.group({
        content: [question.content, Validators.required],
        variants: this.fb.array([])
      });
      question.variants.forEach(variant => {
        (questionGroup.get('variants') as FormArray).push(
          this.fb.group({
            content: [variant.content, Validators.required],
            answer: [variant.answer, Validators.required]
          })
        );
      });
      this.surveyForm.addControl(`question_${question.id}`, questionGroup);
    });

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
  }
}

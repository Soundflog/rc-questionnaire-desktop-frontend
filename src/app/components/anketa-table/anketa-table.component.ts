import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-anketa-table',
  templateUrl: './anketa-table.component.html',
  styleUrls: ['./anketa-table.component.css', './anketa-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnketaTableComponent {
  readonly testForm = new FormGroup({
    testValue: new FormControl('orange')
  });

  readonly questions = [
    new FormGroup({answer: new FormControl('')}),
    new FormGroup({answer: new FormControl('')}),
    new FormGroup({answer: new FormControl('')}),
  ]
  readonly answers = ['Ответ 1', 'Ответ 2', 'Ответ 3'];
  readonly quests = ['Вопрос 1', 'Вопрос 2', 'Вопрос 3'];

  readonly form = new FormGroup({
    quest1: new FormGroup({answer: new FormControl('')}),
    quest2: new FormGroup({answer: new FormControl('')}),
    quest3: new FormGroup({answer: new FormControl('')})
  })
}

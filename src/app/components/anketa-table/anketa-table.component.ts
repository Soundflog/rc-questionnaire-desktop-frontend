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
    new FormGroup({testValue: new FormControl('orange')}),
    new FormGroup({testValue: new FormControl('orange')}),
    new FormGroup({testValue: new FormControl('orange')}),
  ]
  readonly fruits = ['apple', 'orange', 'pineapple'];
  readonly answers = [
    ['apple', 'orange', 'pineapple'],
    ['apple', 'orange', 'pineapple'],
    ['apple', 'orange', 'pineapple']
  ]
  @Input() anketa: any;
}

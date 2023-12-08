import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IExercise} from "../../models/exercise";
import {exercises} from "../../data/exercises";

@Component({
  selector: 'app-module-exercise',
  templateUrl: './module-exercise.component.html',
  styleUrls: ['./module-exercise.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleExerciseComponent {
  @Input() title: string;
  @Input() description: string;
}

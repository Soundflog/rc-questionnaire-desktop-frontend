import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IExercise} from "../../models/exercise";
import { exercises } from 'src/app/data/exercises';
import {modules} from "../../data/modules";
import {forms} from "../../data/forms";
import {IForm} from "../../models/form";

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.css', "./module-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePageComponent {
  exercises: IExercise[] = exercises
  forms: IForm[] = forms
  protected readonly modules = modules;
}

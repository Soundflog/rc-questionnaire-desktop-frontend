import {ChangeDetectionStrategy, Component} from '@angular/core';
import {modules} from "../../data/modules";
import {IModule} from "../../models/module";
import {ModuleIdService} from "../../services/module/ModuleService";
import {ExerciseService} from "../../services/module/ExerciseService";
import {IExercise} from "../../models/exercise";
import {exercises} from "../../data/exercises";

@Component({
  selector: 'app-programm-page',
  templateUrl: 'programm-page.component.html',
  styleUrls: ['programm-page.component.css', 'programm-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgrammPageComponent {
  // readonly modules = [
  //     "Модуль 1",
  //     "Модуль 2",
  //     "Модуль 3"
  // ]
  modules: readonly IModule[] = modules

  constructor(
    private moduleIdService: ModuleIdService) {}

  sendModuleId(moduleId:number): void {
    this.moduleIdService.setModuleId(moduleId);
  }

}

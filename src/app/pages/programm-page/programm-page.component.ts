import {ChangeDetectionStrategy, Component} from '@angular/core';
import {modules} from "../../data/modules";
import {IModule} from "../../models/module";

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
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {modules} from "../../data/modules";
import {IModule} from "../../models/module";
import {ModuleIdService} from "../../services/module/ModuleService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-programm-page',
  templateUrl: 'programm-page.component.html',
  styleUrls: ['programm-page.component.css', 'programm-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgrammPageComponent implements OnInit{

  modules: readonly IModule[] = modules
  visiblePrimaryAnketa = false;

  constructor(
    private router: Router,
    private moduleIdService: ModuleIdService) {}

  ngOnInit(): void {
  }
  sendModuleId(moduleId:number): void {
    this.moduleIdService.setModuleId(moduleId);
  }

  goToNextPage(page: string){
    this.router.navigate(['/rehabilitation/program/module/' + 0 + '/anketa/' + page]);
    this.visiblePrimaryAnketa = !this.visiblePrimaryAnketa;
  }
}

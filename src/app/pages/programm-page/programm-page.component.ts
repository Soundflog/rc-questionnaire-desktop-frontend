import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModuleIdService} from "../../services/module/ModuleService";
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient/patient.service";
import {Observable, tap} from "rxjs";
import {IRehabProgram} from "../../models/response/rehab/rehab_program";

@Component({
  selector: 'app-programm-page',
  templateUrl: 'programm-page.component.html',
  styleUrls: ['programm-page.component.css', 'programm-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgrammPageComponent implements OnInit{

  // modules: readonly IModuleShort[] = modules
  rehabProgram$: Observable<IRehabProgram>;
  visiblePrimaryAnketa = false;

  constructor(
    private router: Router,
    private patientService: PatientService,
    private moduleIdService: ModuleIdService
  ) {}

  ngOnInit(): void {
    this.rehabProgram$ = this.patientService.getRehab().pipe(
      tap((rehab: IRehabProgram) => {
      }),
    );
  }

  sendModuleId(moduleId:number): void {
    this.moduleIdService.setModuleId(moduleId);
  }

  stringFyDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  goToNextPage(programFormId: number){
    String(programFormId);
    this.router.navigate(['/rehabilitation/program/form/' + programFormId]);
    this.visiblePrimaryAnketa = !this.visiblePrimaryAnketa;
  }
}

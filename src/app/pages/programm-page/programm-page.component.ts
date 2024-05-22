import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {modules} from "../../data/modules";
import {IModuleShort} from "../../models/response/rehab/moduleShort";
import {ModuleIdService} from "../../services/module/ModuleService";
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient/patient.service";
import {Observable, tap} from "rxjs";
import {IPatient} from "../../models/response/patient";
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

  goToNextPage(page: string){
    this.router.navigate(['/rehabilitation/program/module/' + 0 + '/anketa/' + page]);
    this.visiblePrimaryAnketa = !this.visiblePrimaryAnketa;
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IRehabProgram} from "../../../models/response/rehab/rehab_program";
import {Router} from "@angular/router";
import {PatientService} from "../../../services/patient/patient.service";
import {ModuleIdService} from "../../../services/module/ModuleService";
import {map} from "rxjs/operators";
import {IProgramFormShort, ProgramFormType} from "../../../models/response/rehab/programFormShort";
import {IModuleShort} from "../../../models/response/rehab/moduleShort";


@Component({
  selector: 'app-programm-page',
  templateUrl: 'programm-page.component.html',
  styleUrls: ['programm-page.component.less'],
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
      // Сортируем по Входным анкетам (в начале все входные анкеты)
      map(program => ({
        ...program,
        programFormResponses: this.sortProgramForms(program.programFormResponses)
      })),
      tap((rehab: IRehabProgram) => {
        // console.log(rehab);
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
    this.router.navigate(['/rehabilitation/program/forms/' + programFormId]);
    this.visiblePrimaryAnketa = !this.visiblePrimaryAnketa;
  }

  sortProgramForms(forms: IProgramFormShort[]): IProgramFormShort[] {
    return forms.sort((a, b) => {
      if (a.typeName === ProgramFormType.IN && b.typeName !== ProgramFormType.IN) {
        return -1; // a идет перед b
      } else if (a.typeName !== ProgramFormType.IN && b.typeName === ProgramFormType.IN) {
        return 1; // b идет перед a
      } else {
        return 0; // порядок не меняется
      }
    });
  }

  isModuleFinished(module: IModuleShort): boolean {
    return !!module.finishedAt;
  }

  isModulesFinished(modules: IModuleShort[]): boolean  {
    return modules.every(module => this.isModuleFinished(module));
  }
}

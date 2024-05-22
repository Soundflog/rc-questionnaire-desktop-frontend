import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IExercise} from "../../models/exercise";
import { exercises } from 'src/app/data/exercises';
import {modules} from "../../data/modules";
import {forms} from "../../data/forms";
import {IForm} from "../../models/form";
import {ExerciseService} from "../../services/module/ExerciseService";
import {Observable, tap} from "rxjs";
import {IRehabProgram} from "../../models/response/rehab/rehab_program";
import {PatientService} from "../../services/patient/patient.service";
import {IFormShortResponse} from "../../models/response/module/formShort";
import {IModule} from "../../models/response/module/module";
import {IExerciseShortResponse} from "../../models/response/module/exerciseShort";
import {Router} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.css', "./module-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePageComponent implements OnInit{
  // protected readonly exercises: IExercise[] = exercises;
  // exercises$ : Observable<IExerciseShortResponse[]>

  // protected readonly forms: IForm[] = forms
  // forms$ : Observable<IFormShortResponse[]>
  modules$ : Observable<IModule>
  idModule: number
  // protected readonly modules = modules;

  constructor(
    private exerciseService: ExerciseService,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idModule = 3;
    this.modules$ = this.patientService.getModule(this.idModule).pipe(
      tap((module: IModule) => {
        console.log(module)
      }),
    );
  }
  sendExerciseId(exercise:number): void {
    this.exerciseService.setExerciseId(exercise);
  }
}

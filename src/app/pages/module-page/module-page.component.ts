import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ExerciseService} from "../../services/module/ExerciseService";
import {Observable, tap} from "rxjs";
import {PatientService} from "../../services/patient/patient.service";
import {IModule} from "../../models/response/module/module";
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleIdService} from "../../services/module/ModuleService";
import {FormIdService} from "../../services/module/FormIdService";

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.css', "./module-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePageComponent implements OnInit {
  // protected readonly exercises: IExercise[] = exercises;
  // exercises$ : Observable<IExerciseShortResponse[]>

  // protected readonly forms: IForm[] = forms
  // forms$ : Observable<IFormShortResponse[]>
  modules$: Observable<IModule>
  moduleId: string;

  // protected readonly modules = modules;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // this.moduleId = this.moduleIdService.getModuleId()
    // if (this.moduleId == null){
    this.route.paramMap.subscribe(params => {
      const moduleIdParam = params.get('moduleId');
      // params.getAll().forEach(param => { console.log(param)})
      if (moduleIdParam !== null) {
        this.moduleId = moduleIdParam;
      }
    });

    this.modules$ = this.patientService.getModule(this.moduleId).pipe(
      tap((module: IModule) => {
        console.log(module)
      }),
    );
  }

  navigateToExercise(moduleId: number, exerciseId: number) {
    this.router.navigate([`/rehabilitation/program/module/${moduleId}/exercise/${exerciseId}`]);
  }

  navigateToForm(moduleId: number, formId: number) {
    this.router.navigate([`/rehabilitation/program/module/${moduleId}/form/${formId}`]);
  }

  protected readonly String = String;
}

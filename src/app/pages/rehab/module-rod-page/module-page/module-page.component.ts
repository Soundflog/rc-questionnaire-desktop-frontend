import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IModule} from "../../../../models/response/module/module";
import {IExerciseShortResponse} from "../../../../models/response/module/exerciseShort";
import {PatientService} from "../../../../services/patient/patient.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ["./module-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulePageComponent implements OnInit {
  modules$: Observable<IModule>;
  groupedExercises: { [key: string]: IExerciseShortResponse[] } = {};
  moduleId: string;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const moduleIdParam = params.get('moduleId');
      if (moduleIdParam !== null) {
        this.moduleId = moduleIdParam;
      }
    });

    this.modules$ = this.patientService.getModule(this.moduleId).pipe(
      tap((module: IModule) => {
        this.groupedExercises = this.groupByBlockType(module.exercises);
      })
    );
  }

  private groupByBlockType(exercises: IExerciseShortResponse[]): { [key: string]: IExerciseShortResponse[] } {
    return exercises.reduce((groups, exercise) => {
      const blockType = exercise.blockType;
      if (!groups[blockType]) {
        groups[blockType] = [];
      }
      groups[blockType].push(exercise);
      return groups;
    }, {} as { [key: string]: IExerciseShortResponse[] });
  }

  getBlockTypes(groupedExercises: { [key: string]: IExerciseShortResponse[]} ): string[] {
    return Object.keys(groupedExercises);
  }
}

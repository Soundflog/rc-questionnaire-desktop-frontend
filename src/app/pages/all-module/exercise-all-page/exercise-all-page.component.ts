import {Component, OnInit} from '@angular/core';
import {IExerciseShortResponse} from "../../../models/response/module/exerciseShort";
import {PatientService} from "../../../services/patient/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {IFormShortResponse} from "../../../models/response/module/formShort";

@Component({
  selector: 'app-exercise-all-page',
  templateUrl: './exercise-all-page.component.html',
  styleUrls: ['./exercise-all-page.component.less']
})
export class ExerciseAllPageComponent implements OnInit{
  exercisesShort$: Observable<IExerciseShortResponse[]>;
  moduleId: string;

  groupedExercises: { [key: string]: IExerciseShortResponse[] } = {};

  constructor(
    private patientService: PatientService,
    private route: Router
  )  {
  }
  ngOnInit() {
    this.moduleId = this.route.url.split('/')[4]
    this.exercisesShort$ = this.patientService.getAllExercisesModule(this.moduleId).pipe(
      tap((response) => {
        console.log(response)
      })
    );
  }
}

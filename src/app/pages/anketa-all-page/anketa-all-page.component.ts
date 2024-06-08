import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient/patient.service";
import {Observable, tap} from "rxjs";
import {IFormShortResponse} from "../../models/response/module/formShort";
import {Router} from "@angular/router";

@Component({
  selector: 'app-anketa-all-page',
  templateUrl: './anketa-all-page.component.html',
  styleUrls: ['./anketa-all-page.component.less']
})
export class AnketaAllPageComponent implements OnInit{
  formsShort$: Observable<IFormShortResponse[]>;
  moduleId: string;
  constructor(
    private patientService: PatientService,
    private router: Router
  ){
  }

  ngOnInit(){
    this.moduleId = this.router.url.split('/')[4]
    this.formsShort$ = this.patientService.getAllFormModule(this.moduleId).pipe(
      tap((response) => {
        console.log(response)
      })
    );
  }
}


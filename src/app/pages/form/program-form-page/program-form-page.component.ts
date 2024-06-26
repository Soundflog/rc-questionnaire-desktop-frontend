import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IForm} from "../../../models/form";
import {PatientService} from "../../../services/patient/patient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-program-form-page',
  templateUrl: './program-form-page.component.html',
  styleUrls: ['./program-form-page.component.css', "./program-form-page.component.less"]
})
export class ProgramFormPageComponent implements OnInit{
  form$: Observable<IForm>;
  programFormId: string;

  constructor(
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.programFormId = this.router.url.split('/')[6];
    this.programFormId = this.router.url.split('/')[4];
    this.form$ = this.patientService.getProgramForm( this.programFormId).pipe(
      tap(form => {
      })
    );
  }
}

import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IForm} from "../../models/form";
import {PatientService} from "../../services/patient/patient.service";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-program-form-page',
  templateUrl: './program-form-page.component.html',
  styleUrls: ['./program-form-page.component.css']
})
export class ProgramFormPageComponent implements OnInit{
  form$: Observable<IForm>;
  programFormId: string;
  programId: string;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    // this.programFormId = this.router.url.split('/')[6];
    this.programFormId = this.router.url.split('/')[4];
    this.form$ = this.patientService.getProgramForm( this.programFormId).pipe(
      tap(form => {
        console.log(form);
      })
    );
  }
}

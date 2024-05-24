import {Component, OnInit} from '@angular/core';
import {IForm} from "../../models/form";
import {forms} from "../../data/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../services/patient/patient.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-anketa-page',
  templateUrl: './anketa-page.component.html',
  styleUrls: ['./anketa-page.component.css']
})
export class AnketaPageComponent implements OnInit {
  // protected readonly formsData: IForm[] = forms;
  formId: string
  moduleId: string
  form$: Observable<IForm>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
  ) {
  }

  ngOnInit() {
    this.formId = this.router.url.split('/')[6];
    this.moduleId = this.router.url.split('/')[4]
    this.form$ = this.patientService.getForm(this.moduleId, this.formId).pipe(
      tap(form => {
        console.log(form);
      })
    );
  }
}

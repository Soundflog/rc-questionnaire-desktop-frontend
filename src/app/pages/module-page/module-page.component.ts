import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {PatientService} from "../../services/patient/patient.service";
import {IModule} from "../../models/response/module/module";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.css', "./module-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePageComponent implements OnInit {
  modules$: Observable<IModule>
  moduleId: string;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const moduleIdParam = params.get('moduleId');
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
}

import {ChangeDetectionStrategy, Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import {TuiDialogContext} from '@taiga-ui/core';
import {PatientService} from "../../services/patient/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {IModule} from "../../models/response/module/module";
import {IExercise} from "../../models/exercise";

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.css', './exercise-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisePageComponent implements OnInit {
  @ViewChild('preview')
  readonly preview?: TemplateRef<TuiDialogContext>;

  exercise$: Observable<IExercise>
  exerciseId: string;
  moduleId: string;

  constructor(
    @Inject(TuiPreviewDialogService)
    private readonly previewDialogService: TuiPreviewDialogService,
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // console.log(this.router.url.split('/')[4])
    this.route.paramMap.subscribe(params => {
      const exerciseIdParam = params.get('exerciseId');
      const moduleIdParam = params.get('moduleId');
      if (exerciseIdParam !== null) {
        this.exerciseId = exerciseIdParam;
      }
      if (moduleIdParam !== null) {
        this.moduleId = moduleIdParam;
      }
      // Инициализируем form$ только после назначения значений formId и moduleId
      if (this.exerciseId !== undefined || this.moduleId !== undefined) {
        this.exerciseId = this.router.url.split('/')[6];
        this.moduleId = this.router.url.split('/')[4]
        console.log(this.exerciseId);
        this.exercise$ = this.patientService.getExercise(this.moduleId, this.exerciseId).pipe(
          tap(form => {
            console.log(form);
          })
        );
      }
    });
  }

  show(): void {
    this.previewDialogService.open(this.preview || '').subscribe();
  }
}

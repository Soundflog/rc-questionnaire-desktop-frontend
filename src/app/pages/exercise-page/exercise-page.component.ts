import {ChangeDetectionStrategy, Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import {TuiDialogContext} from '@taiga-ui/core';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.css', './exercise-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisePageComponent {
  @ViewChild('preview')
  readonly preview?: TemplateRef<TuiDialogContext>;

  constructor(
    @Inject(TuiPreviewDialogService)
    private readonly previewDialogService: TuiPreviewDialogService,
  ) {}

  show(): void {
    this.previewDialogService.open(this.preview || '').subscribe();
  }
}

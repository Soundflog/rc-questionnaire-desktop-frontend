import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: 'results-page.component.html',
  styleUrls: ['results-page.component.less', 'results-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsPageComponent {

}

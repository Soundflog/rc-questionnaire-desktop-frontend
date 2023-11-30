import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-programm-page',
  templateUrl: 'programm-page.component.html',
  styleUrls: ['programm-page.component.css', 'programm-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgrammPageComponent {
}

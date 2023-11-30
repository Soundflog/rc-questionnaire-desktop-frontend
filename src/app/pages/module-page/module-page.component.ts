import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.css', "./module-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePageComponent {
}

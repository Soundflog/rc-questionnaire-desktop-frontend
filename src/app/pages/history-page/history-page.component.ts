import {ChangeDetectionStrategy, Component} from '@angular/core';
import {patients} from "../../data/patients";

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css', 'history-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPageComponent {

  protected readonly patients = patients;
}

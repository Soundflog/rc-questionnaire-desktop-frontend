import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {patients} from "../../data/patients";
import {PatientService} from "../../services/patient/patient.service";
import {Observable, tap} from "rxjs";
import {IHistoryResponse} from "../../models/response/history/historyResponse";
import {histories} from "../../data/history";

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css', 'history-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPageComponent implements OnInit{
  // protected readonly patients = patients;

  history = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
    "      et dolore magna aliqua.";
  histories = histories;
  isHistory = true;
  // history$: Observable<IHistoryResponse[]>

  constructor(
    private patientService: PatientService,
  ) {}

  ngOnInit() {
    // this.history$ = this.patientService.getHistory().pipe(
    //   tap(history => {
    //     console.log(history);
    //   })
    // );
  }
}

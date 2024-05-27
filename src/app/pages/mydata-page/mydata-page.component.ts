import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IPatient, PatientStatus} from "../../models/response/patient";
import {Observable, tap} from "rxjs";
import {PatientService} from "../../services/patient/patient.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {TuiStatus} from "@taiga-ui/kit";

@Component({
  selector: 'app-mydata-page',
  templateUrl: './mydata-page.component.html',
  styleUrls: ['./mydata-page.component.css', './mydata-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MydataPageComponent implements OnInit{
  image = 'https://angular.io/assets/images/logos/angular/angular.png'
  graduation = 'Врач-реабилитолог'
  staj_old = 25

  title = 'angular app'
  sensitive = true; // Скрыть паспортные данные
  patient$: Observable<IPatient>;
  constructor(
    private patientService: PatientService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.patient$ = this.patientService.getMe().pipe(
      tap((patient: IPatient) => {
        console.log(patient);
        if (!patient) {
          this.toastr.error('Не удалось получить данные о пациенте', 'Ошибка');
          this.router.navigate(['/']);
        }
      })
    )
  }

  stringFyAge(birthDate: string): string {
    const [year, month, day] = birthDate.split('-');
    return day + '-' + month + '-' + year;
  }

  stringFyName(firstName: string, lastName: string, middleName: string): string {
    return lastName +' ' + firstName +' ' + middleName;
  }

  calculateAge(birthDate: string): number {
    const birthDateObject = new Date(birthDate);
    const currentDate = new Date();
    // Вычисление разницы в годах
    const age = currentDate.getFullYear() - birthDateObject.getFullYear();
    // Проверка, добавляем один год, если день рождения еще не наступил
    if (
      currentDate.getMonth() < birthDateObject.getMonth() ||
      (currentDate.getMonth() === birthDateObject.getMonth() &&
        currentDate.getDate() < birthDateObject.getDate())
    ) {
      return age - 1;
    }
    return age;
  }
}

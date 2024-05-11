import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/another/products/products.service";
import {ModalService} from "../../services/another/modal/modal.service";
import {IPatient} from "../../models/patient";
import {Observable, tap} from "rxjs";
import {patients} from "../../data/patients";
import {PatientService} from "../../services/patient/patient.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

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

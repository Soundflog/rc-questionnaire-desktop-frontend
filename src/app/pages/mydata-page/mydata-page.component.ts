import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {IPatient} from "../../models/patient";
import {Observable} from "rxjs";
import {patients} from "../../data/patients";

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
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }

  protected readonly patients = patients;
  protected readonly Date = Date;
  calculateAge(birthDate: string): number {
    // Преобразование строки даты в объект Date
    const birthDateObject = new Date(birthDate);

    // Текущая дата
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
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core'
import {AuthService} from "../../../services/auth/AuthService";
import {select, Store} from "@ngrx/store";
import {loginAction} from "../../../store/action/login.action";
import {Observable} from "rxjs";
import {isSubmittingSelector} from "../../../store/selectors";
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css', "./auth-page.component.less"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit{

  logo_im = 'https://angular.io/assets/images/logos/angular/angular.png'
  authForm : FormGroup;
  isSubmitting$: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store) {
  }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void{
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  onSubmit(): void{
    /*const credentials = this.authForm.value;
    this.authService.login(credentials).subscribe((success) =>{
      if (success){
        // Перенаправление на защищенную страницу или обновление текущей страницы
      } else {
        // Обработка ошибки входа
      }
    })*/
    console.log(this.authForm.value)
    this.store.dispatch(loginAction(this.authForm.value))
  }
}

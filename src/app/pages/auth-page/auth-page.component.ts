import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core'
import {AuthService} from "../../services/auth/auth.service";
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
  /*readonly authForm = new FormGroup({
    Login: new FormControl('Логин'),
    Password: new FormControl('Пароль')
  });*/
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.authForm.valid){
      this.authService.login(this.authForm.value)
    } else {
      console.log('not valid')
    }
    /*const credentials = this.authForm.value;
    this.authService.login(credentials).subscribe((success) =>{
      if (success){
        // Перенаправление на защищенную страницу или обновление текущей страницы
      } else {
        // Обработка ошибки входа
      }
    })*/
  }

}

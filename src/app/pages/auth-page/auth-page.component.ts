import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core'
import {AuthService} from "../../services/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {TuiAlertService} from "@taiga-ui/core";

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
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              @Inject(TuiAlertService)
              private readonly alerts: TuiAlertService,
              private router: Router) {
    this.authForm = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.authForm.valid){
      this.authService.login(this.authForm.value).subscribe(
        ()=> {
          this.router.navigate(['/rehabilitation/data']).then(() => {
          })
          this.alerts.open('Вы успешно вошли в систему', {status: 'success'}).subscribe()
        });
    } else {
      this.alerts.open('Заполните все поля', {status: 'warning'}).subscribe()
    }
  }

}

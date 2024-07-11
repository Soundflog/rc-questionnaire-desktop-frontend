import {ChangeDetectorRef, Component, Inject, OnInit, Optional, Self, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgControl, Validators} from '@angular/forms';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core'
import {AuthService} from "../../services/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {TuiAlertService, TuiPrimitiveTextfieldComponent} from "@taiga-ui/core";
import {AbstractTuiControl, TuiNativeFocusableElement} from "@taiga-ui/cdk";
import {tap} from "rxjs";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css', "./auth-page.component.less"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent extends AbstractTuiControl<string> {

  logo_im = 'https://angular.io/assets/images/logos/angular/angular.png'
  authForm: FormGroup;

  // password
  @ViewChild(TuiPrimitiveTextfieldComponent)
  private readonly textfield?: TuiPrimitiveTextfieldComponent;
  private isPasswordHidden = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    private router: Router,
    @Optional()
    @Self()
    @Inject(NgControl)
      control: NgControl | null,
    @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
  ) {
    super(control, cdr);
    this.authForm = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      this.authService.login(this.authForm.value).pipe
      (tap(() => {
        this.alerts.open('Вы успешно вошли в систему', {status: 'success'}).subscribe()
        this.router.navigate(['/rehabilitation/data']).then(() => {})
        })
      ).subscribe();
    } else {
      this.alerts.open('Заполните все поля', {status: 'warning'}).subscribe()
    }
  }

  // password
  get nativeFocusableElement(): TuiNativeFocusableElement | null {
    return this.computedDisabled || !this.textfield
      ? null
      : this.textfield.nativeFocusableElement;
  }

  get focused(): boolean {
    return !!this.textfield?.focused;
  }

  get icon(): string {
    return this.isPasswordHidden ? 'tuiIconEyeLarge' : 'tuiIconEyeOffLarge';
  }

  get hint(): string {
    return this.isPasswordHidden ? 'Show password' : 'Hide password';
  }

  get inputType(): string {
    return this.isPasswordHidden ? 'password' : 'text';
  }

  onFocused(focused: boolean): void {
    this.updateFocused(focused);
  }

  togglePasswordVisibility(): void {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  protected getFallbackValue(): string {
    return '';
  }
}

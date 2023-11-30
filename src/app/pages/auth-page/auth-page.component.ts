import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core'
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css', "./auth-page.component.less"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit{

  logo_im = 'https://angular.io/assets/images/logos/angular/angular.png'

  readonly testForm = new FormGroup({
    Login: new FormControl('Логин'),
  });
  constructor() { }

  ngOnInit(): void {
  }

}

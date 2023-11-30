import {Component} from '@angular/core';
import {AppModule} from "./app.module";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  pageTitle = 'Ваше приложение';
  pageText = ''
}

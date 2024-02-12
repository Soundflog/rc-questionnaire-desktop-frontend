import { Component } from '@angular/core';
import {IForm} from "../../models/form";
import {forms} from "../../data/forms";

@Component({
  selector: 'app-anketa-page',
  templateUrl: './anketa-page.component.html',
  styleUrls: ['./anketa-page.component.css']
})
export class AnketaPageComponent {
  protected readonly formsData: IForm[] = forms;
    constructor() { }

}

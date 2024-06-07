import {Component, Input} from '@angular/core';
import {IProgramFormShort} from "../../models/response/rehab/programFormShort";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-anketa-module',
  templateUrl: './card-anketa-module.component.html',
  styleUrls: ['./card-anketa-module.component.less']
})
export class CardAnketaModuleComponent {
  @Input() programForm: IProgramFormShort;

  constructor(private router: Router) {
  }
  goToNextPage(programFormId: number){
    String(programFormId);
    this.router.navigate(['/rehabilitation/program/forms/' + programFormId]);
  }

  stringFyDate(date: string) {
    return new Date(date).toLocaleDateString();
  }
}

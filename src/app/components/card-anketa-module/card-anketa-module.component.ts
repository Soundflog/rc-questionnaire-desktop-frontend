import {Component, Inject, Input} from '@angular/core';
import {IProgramFormShort} from "../../models/response/rehab/programFormShort";
import {Router} from "@angular/router";
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from "@taiga-ui/core";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'app-card-anketa-module',
  templateUrl: './card-anketa-module.component.html',
  styleUrls: ['./card-anketa-module.component.less']
})
export class CardAnketaModuleComponent {
  @Input() programForm: IProgramFormShort;

  constructor(private router: Router,
              @Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {
  }
  goToNextPage(programFormId: number){
    String(programFormId);
    this.router.navigate(['/rehabilitation/program/forms/' + programFormId]);
  }

  stringFyDate(date: string) {
    return new Date(date).toLocaleDateString();
  }


  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        label: 'What a cool library set',
        header,
        size,
      })
      .subscribe();
  }
}

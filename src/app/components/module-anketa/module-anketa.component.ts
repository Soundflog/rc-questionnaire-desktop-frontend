import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-module-anketa',
  templateUrl: './module-anketa.component.html',
  styleUrls: ['./module-anketa.component.css']
})
export class ModuleAnketaComponent {
  @Input() description: string
  @Input() title: string

}

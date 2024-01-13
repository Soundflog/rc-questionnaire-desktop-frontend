import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BackendErrorsMessagesComponent} from "./component/backend-errors-messages.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorsMessagesComponent],
  exports: [BackendErrorsMessagesComponent]
})
export class BackendErrorMessagesModule{

}

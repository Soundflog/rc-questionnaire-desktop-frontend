import {NgModule} from "@angular/core";
import {AuthPageComponent} from "./component/auth-page/auth-page.component";
import {CommonModule} from "@angular/common";
import {TuiInputModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {reducer} from "../store/reducers";
import {TuiButtonModule} from "@taiga-ui/core";

const routes: Routes = [
  {
    path: '', component: AuthPageComponent
  }
]

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
    StoreModule.forFeature('auth', reducer)
  ]
})
export class AuthModule{

}

import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {NgModule} from '@angular/core'
import {BrowserModule, Title} from '@angular/platform-browser'
import {ToastrModule} from "ngx-toastr";
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ProductComponent} from './components/another/product/product.component'
import {HttpClientModule} from '@angular/common/http'
import {GlobalErrorComponent} from './components/global-error/global-error.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {FilterProductsPipe} from './pipes/filter-products.pipe'
import {ModalComponent} from './components/another/modal/modal.component'
import {CreateProductComponent} from './components/another/create-product/create-product.component'
import {FocusDirective} from './directives/focus.directive'
import {AnketirovaniePageComponent} from './pages/anketirovanie-page/anketirovanie-page.component'
import {NavigationComponent} from './components/navigation/navigation.component'
import { TuiButtonModule, TuiGroupModule, TuiLabelModule, TuiLinkModule, TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import {
    TuiAccordionModule, TuiAvatarModule,
    TuiBadgeModule, TuiBreadcrumbsModule, TuiCheckboxBlockModule,
    TuiInputModule,
    TuiIslandModule, TuiRadioBlockModule,
    TuiRatingModule,
    TuiTabsModule, TuiTagModule
} from "@taiga-ui/kit";
import {TuiAppBarModule} from "@taiga-ui/addon-mobile";
import {LeftNavComponent} from './components/left-nav/left-nav.component';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {MydataPageComponent} from './pages/mydata-page/mydata-page.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {ProgrammPageComponent} from './pages/programm-page/programm-page.component';
import {ResultsPageComponent} from './pages/results-page/results-page.component';
import {AccordComponent} from './components/another/accord/accord.component';
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModulePageComponent} from './pages/module-page/module-page.component';
import {ExercisePageComponent} from './pages/exercise-page/exercise-page.component';
import {AnketaPageComponent} from './pages/anketa-page/anketa-page.component';
import {ModuleExerciseComponent} from './components/module-exercise/module-exercise.component';
import {ModuleAnketaComponent} from './components/module-anketa/module-anketa.component';
import {ModuleRodPageComponent} from './pages/module-rod-page/module-rod-page.component';
import {TuiPreviewModule} from "@taiga-ui/addon-preview";
import {AnketaTableComponent} from './components/anketa-table/anketa-table.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {NavModuleComponent} from './components/nav-module/nav-module.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    AnketirovaniePageComponent,
    NavigationComponent,
    LeftNavComponent,
    AuthPageComponent,
    MydataPageComponent,
    HistoryPageComponent,
    ProgrammPageComponent,
    ResultsPageComponent,
    AccordComponent,
    ModulePageComponent,
    ExercisePageComponent,
    AnketaPageComponent,
    ModuleExerciseComponent,
    ModuleAnketaComponent,
    ModuleRodPageComponent,
    AnketaTableComponent,
    NavModuleComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TuiRootModule,
        TuiRatingModule,
        TuiAppBarModule,
        TuiButtonModule,
        TuiTabsModule,
        TuiAccordionModule,
        NgOptimizedImage,
        TuiIslandModule,
        TuiLabelModule,
        TuiBadgeModule,
        TuiGroupModule,
        TuiInputModule,
        TuiAvatarModule,
        TuiPreviewModule,
        TuiTagModule,
        TuiTableModule,
        TuiRadioBlockModule,
        TuiBreadcrumbsModule,
        TuiLinkModule,
        ToastrModule.forRoot(),
        TuiDialogModule,
        TuiAlertModule,
        TuiCheckboxBlockModule
    ],
  providers: [Title, {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {

}

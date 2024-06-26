import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {NgModule} from '@angular/core'
import {BrowserModule, Title} from '@angular/platform-browser'
import {ToastrModule} from "ngx-toastr";
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {GlobalErrorComponent} from './components/another/global-error/global-error.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {FilterProductsPipe} from './pipes/filter-products.pipe'
import {FocusDirective} from './directives/focus.directive'
import {AnketirovaniePageComponent} from './pages/main/anketirovanie-page/anketirovanie-page.component'
import {NavigationComponent} from './components/navs/navigation/navigation.component'
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiLabelModule,
  TuiLinkModule,
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiExpandModule,
  TuiSvgModule,
  TuiModeModule,
  TuiPrimitiveTextfieldModule, TuiWrapperModule, TuiHintModule, TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {
    TuiAccordionModule,
    TuiBadgeModule,
    TuiBreadcrumbsModule,
    TuiCheckboxBlockModule,
    TuiInputModule,
    TuiInputSliderModule,
    TuiIslandModule,
    TuiRadioBlockModule,
    TuiRadioGroupModule,
    TuiRadioLabeledModule,
    TuiRadioListModule,
    TuiRadioModule,
    TuiRatingModule,
    TuiSliderModule,
    TuiTabsModule,
    TuiTagModule,
    TuiToggleModule
} from "@taiga-ui/kit";
import {TuiAppBarModule, TuiSidebarModule, TuiTabBarModule} from "@taiga-ui/addon-mobile";
import {LeftNavComponent} from './components/navs/left-nav/left-nav.component';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {MydataPageComponent} from './pages/mydata-page/mydata-page.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {ResultsPageComponent} from './pages/results-page/results-page.component';
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ExercisePageComponent} from './pages/exercise-page/exercise-page.component';
import {AnketaPageComponent} from './pages/form/anketa-page/anketa-page.component';
import {ModuleExerciseComponent} from './components/exercises/module-exercise/module-exercise.component';
import {ModuleAnketaComponent} from './components/forms/module-anketa/module-anketa.component';
import {ModuleRodPageComponent} from './pages/rehab/module-rod-page/module-rod-page.component';
import {TuiPreviewModule} from "@taiga-ui/addon-preview";
import {AnketaTableComponent} from './components/forms/anketa-table/anketa-table.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {NavModuleComponent} from './components/navs/nav-module/nav-module.component';
import {TuiActiveZoneModule, TuiPlatformModule, TuiValueChangesModule} from "@taiga-ui/cdk";
import {
  TuiAppearanceModule, TuiAutoColorModule, TuiAvatarModule, TuiButtonGroupModule, TuiCardModule,
  TuiFadeModule, TuiHeaderModule,
  TuiIconsModule,
  TuiNavigationModule,
  TuiSensitiveModule, TuiSurfaceModule, TuiTitleModule
} from "@taiga-ui/experimental";
import {LoadingComponent} from './components/another/loading/loading.component';
import {ProgramFormPageComponent} from './pages/form/program-form-page/program-form-page.component';
import {httpInterceptorProviders} from "./services/auth/auth-interceptor";
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import {TuiBlockStatusModule} from "@taiga-ui/layout";
import { EmptyModuleComponent } from './components/another/empty-module/empty-module.component';
import { ExerciseAllPageComponent } from './pages/all-module/exercise-all-page/exercise-all-page.component';
import { AnketaAllPageComponent } from './pages/all-module/anketa-all-page/anketa-all-page.component';
import { CardAnketaModuleComponent } from './components/forms/card-anketa-module/card-anketa-module.component';
import {ProgrammPageComponent} from "./pages/rehab/programm-page/programm-page.component";
import {ModulePageComponent} from "./pages/rehab/module-rod-page/module-page/module-page.component";


@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    FocusDirective,
    AnketirovaniePageComponent,
    NavigationComponent,
    LeftNavComponent,
    ModulePageComponent,
    AuthPageComponent,
    MydataPageComponent,
    HistoryPageComponent,
    ProgrammPageComponent,
    ResultsPageComponent,
    ExercisePageComponent,
    AnketaPageComponent,
    ModuleExerciseComponent,
    ModuleAnketaComponent,
    ModuleRodPageComponent,
    AnketaTableComponent,
    NavModuleComponent,
    LoadingComponent,
    ProgramFormPageComponent,
    NotFoundPageComponent,
    EmptyModuleComponent,
    ExerciseAllPageComponent,
    AnketaAllPageComponent,
    CardAnketaModuleComponent
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
    TuiCheckboxBlockModule,
    TuiInputSliderModule,
    TuiSliderModule,
    TuiRadioListModule,
    TuiRadioLabeledModule,
    TuiValueChangesModule,
    TuiRadioGroupModule,
    TuiRadioModule,
    TuiNavigationModule,
    TuiIconsModule,
    TuiFadeModule,
    TuiAppearanceModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiExpandModule,
    TuiActiveZoneModule,
    TuiSidebarModule,
    TuiTabBarModule,
    TuiSvgModule,
    TuiSensitiveModule,
    TuiToggleModule,
    TuiBlockStatusModule,
    TuiModeModule,
    TuiCardModule,
    TuiAvatarModule,
    TuiHeaderModule,
    TuiTitleModule,
    TuiSurfaceModule,
    TuiPlatformModule,
    TuiAvatarModule,
    TuiAutoColorModule,
    TuiButtonGroupModule,
    TuiPrimitiveTextfieldModule,
    TuiWrapperModule,
    TuiHintModule,
    TuiTextfieldControllerModule
  ],
  providers: [Title, httpInterceptorProviders,
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  exports: [
    ModuleExerciseComponent,
    ModuleAnketaComponent,
    EmptyModuleComponent,
    LoadingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

import {Injectable, NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AnketirovaniePageComponent} from './pages/anketirovanie-page/anketirovanie-page.component'
import {AuthPageComponent} from "./pages/auth-page/auth-page.component";
import {MydataPageComponent} from "./pages/mydata-page/mydata-page.component";
import {HistoryPageComponent} from "./pages/history-page/history-page.component";
import {ProgrammPageComponent} from "./pages/programm-page/programm-page.component";
import {ResultsPageComponent} from "./pages/results-page/results-page.component";
import {ModulePageComponent} from "./pages/module-page/module-page.component";
import {ExercisePageComponent} from "./pages/exercise-page/exercise-page.component";
import {AnketaPageComponent} from "./pages/anketa-page/anketa-page.component";
import {ModuleRodPageComponent} from "./pages/module-rod-page/module-rod-page.component";
import {authGuard} from "./services/auth/auth.guard";



const routes: Routes = [
  { path: 'login', component: AuthPageComponent },
  {
    path: 'rehabilitation',
    component: AnketirovaniePageComponent,
    canActivate: [authGuard()],
    children: [
      { path: '', redirectTo: 'data', pathMatch: 'full'},
      { path: 'data', component: MydataPageComponent, data: {title: 'Мои данные', text: 'Text for my data'}},
      { path: 'history', component: HistoryPageComponent, data: {title: 'История реабилитации'} },
      { path: 'program', component: ProgrammPageComponent, data: {title: 'Программа реабилитации'} },
      { path: 'results', component: ResultsPageComponent, data: {title: 'Результаты реабилитации'} },
      {
        path: 'program/module/:moduleId',
        component: ModuleRodPageComponent,
        data: { title: 'Реабилитационный модуль' },
        children: [
          { path: '', component: ModulePageComponent, data: { title: 'Модуль' } },
          { path: 'exercise/:exerciseId', component: ExercisePageComponent, data: { title: 'Упражнение' } },
          { path: 'anketa/:anketaId', component: AnketaPageComponent, data: { title: 'Анкета' } },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

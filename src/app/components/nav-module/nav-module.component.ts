import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModuleIdService} from "../../services/module/ModuleService";
import {Router} from "@angular/router";
import {FormIdService} from "../../services/module/FormIdService";

@Component({
  selector: 'app-nav-module',
  templateUrl: './nav-module.component.html',
  styleUrls: ['./nav-module.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavModuleComponent implements OnInit{

  constructor(
    private router: Router,
    private moduleIdService: ModuleIdService,
    private formIdService: FormIdService) {}

  receivedModuleId: number | null = null;
  receivedFormId: number | null = null;

  ngOnInit(): void {
    // ModuleId
    this.receivedModuleId = this.moduleIdService.getModuleId();
    // this.moduleIdService.moduleId$.subscribe((moduleId) => {
    //   this.receivedModuleId = moduleId;
    // });
  }
  goToNextPage( page:String): void {
    // Здесь 'next-page' - это путь к следующей странице
    this.router.navigate(['/rehabilitation/program/modules/'+ this.receivedModuleId + page]);
  }

  items = [
    {
      caption: 'Модуль',
      routerLink: '/program/modules/:moduleId',
      page: ''
    },
    {
      caption: 'Упражнения',
      routerLink: '/program/modules/:moduleId/exercises/all',
      page: '/exercises/all'
    },
    {
      caption: 'Анкеты',
      routerLink: '/program/modules/:moduleId/forms/all',
      page: '/forms/all'
    },
  ];
}

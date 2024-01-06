import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModuleIdService} from "../../services/module/ModuleService";
import {FormIdService} from "../../services/module/FormIdService";

@Component({
  selector: 'app-module-anketa',
  templateUrl: './module-anketa.component.html',
  styleUrls: ['./module-anketa.component.css']
})
export class ModuleAnketaComponent implements OnInit{
  @Input() id: string;
  @Input() description: string;
  @Input() title: string;

  constructor(
    private router: Router,
    private moduleIdService: ModuleIdService,
    private formIdService: FormIdService) {}

  receivedModuleId: number | null = null;

  ngOnInit(): void {
    this.receivedModuleId = this.moduleIdService.getModuleId();
    this.moduleIdService.moduleId$.subscribe((moduleId) => {
      this.receivedModuleId = moduleId;
    });

  }
  goToNextPage( page:String): void {
    // Здесь 'next-page' - это путь к следующей странице
    this.router.navigate(['/rehabilitation/program/module/'+ this.receivedModuleId +'/anketa/'+page]);
    this.formIdService.setFormId(Number(this.id))
  }

}

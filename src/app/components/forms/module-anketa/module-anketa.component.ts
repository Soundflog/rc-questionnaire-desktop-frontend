import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleIdService} from "../../../services/module/ModuleService";
import {FormIdService} from "../../../services/module/FormIdService";

@Component({
  selector: 'app-module-anketa',
  templateUrl: './module-anketa.component.html',
  styleUrls: ['./module-anketa.component.less']
})
export class ModuleAnketaComponent implements OnInit{
  @Input() id: number;
  @Input() moduleId: string;
  @Input() description: string;
  @Input() title: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moduleIdService: ModuleIdService,
    private formIdService: FormIdService
  ) {}

  receivedModuleId: number | null = null;

  ngOnInit(): void {
  }

  goToNextPage(moduleId: string, formId: number) {
    String(formId)
    this.router.navigate([`/rehabilitation/program/modules/${moduleId}/forms/${formId}`]);
  }
}

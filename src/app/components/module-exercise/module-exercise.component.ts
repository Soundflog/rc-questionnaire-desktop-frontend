import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IExercise} from "../../models/exercise";
import {exercises} from "../../data/exercises";
import {Router} from "@angular/router";
import {ModuleIdService} from "../../services/module/ModuleService";
import {ExerciseService} from "../../services/module/ExerciseService";

@Component({
  selector: 'app-module-exercise',
  templateUrl: './module-exercise.component.html',
  styleUrls: ['./module-exercise.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleExerciseComponent implements OnInit{
  @Input() id: string;
  @Input() name: string;
  @Input() description: string;

  constructor(
    private router: Router,
    private moduleIdService: ModuleIdService,
    private exerciseService: ExerciseService) {}

  receivedModuleId: number | null = null;
  receivedExercise: number | null = null;

  ngOnInit(): void {
    // ModuleId
    this.receivedModuleId = this.moduleIdService.getModuleId();
    this.moduleIdService.moduleId$.subscribe((moduleId) => {
      this.receivedModuleId = moduleId;
    });
    // ExerciseId
    this.receivedExercise = this.exerciseService.getExerciseId();
    this.exerciseService.exercise$.subscribe((exercise) =>{
      this.receivedExercise = exercise;
    })
  //   TODO: реализовать передачу упражнения из компонента в компонент с endpoint
  }

  goToNextPage(page: string): void {
    // Здесь 'next-page' - это путь к следующей странице
    this.router.navigate(['/rehabilitation/program/module/'+ this.receivedModuleId +'/exercise/'+page]);
  }
}

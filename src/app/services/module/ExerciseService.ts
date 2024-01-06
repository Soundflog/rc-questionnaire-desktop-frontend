import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exerciseSubject = new BehaviorSubject<number | null>(null);
  exercise$: Observable<number | null> = this.exerciseSubject.asObservable();

  setExerciseId(exercise: number): void {
    this.exerciseSubject.next(exercise);
  }

  getExerciseId(): number | null{
    return this.exerciseSubject.value;
  }

}

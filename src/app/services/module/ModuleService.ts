import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModuleIdService {
  private moduleIdSubject = new BehaviorSubject<number | null>(null);
  moduleId$: Observable<number | null> = this.moduleIdSubject.asObservable();

  setModuleId(moduleId: number): void {
    this.moduleIdSubject.next(moduleId);
  }

  getModuleId(): number | null {
    return this.moduleIdSubject.value;
  }
}

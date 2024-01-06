import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Form} from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class FormIdService {
  private formIdSubject = new BehaviorSubject<number | null>(null);
  formId$: Observable<number | null> = this.formIdSubject.asObservable();

  private formSubject = new BehaviorSubject<Form | null>(null);
  form$: Observable<Form | null> = this.formSubject.asObservable()

  setFormId(formId: number): void {
    this.formIdSubject.next(formId);
  }

  setForm(form:Form):void{
    this.formSubject.next(form);
  }

  getForm(): Form | null{
    return this.formSubject.value;
  }

  getFormId(): number | null {
    return this.formIdSubject.value;
  }
}

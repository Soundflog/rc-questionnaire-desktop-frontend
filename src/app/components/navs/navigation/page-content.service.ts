import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageContentService {
  private pageTitleSubject = new BehaviorSubject<string>(''); // BehaviorSubject хранит текущий заголовок
  pageTitle$ = this.pageTitleSubject.asObservable();

  private pageTextSubject = new BehaviorSubject<string>(''); // BehaviorSubject хранит текущий текст
  pageText$ = this.pageTextSubject.asObservable();

  updatePageContent(title: string, text: string) {
    this.pageTitleSubject.next(title);
    this.pageTextSubject.next(text);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.less']
})
export class LeftNavComponent {
  open = false;

  activeItemIndex = 0;

  readonly nav = [
    {title: 'Мои данные', link: 'data'},
    {title: 'История проведения медицинской реабилитации', link: 'history'},
    {title: 'Программа реабилитации', link: 'program'},
    {title: 'Результаты реабилитации', link:'results'},
  ];

}

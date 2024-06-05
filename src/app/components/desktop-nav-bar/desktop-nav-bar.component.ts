import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiIsString} from "@taiga-ui/cdk";

@Component({
  selector: 'app-desktop-nav-bar',
  templateUrl: './desktop-nav-bar.component.html',
  styleUrls: ['./desktop-nav-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopNavBarComponent {
  readonly collaborators = ['Carol Cleveland', 'Neil Innes'];

  readonly tabs = [
    'John Cleese',
    'Eric Idle',
    this.collaborators,
    'Michael Palin',
    'Terry Jones',
    'Terry Gilliam',
    'Graham Chapman',
  ];

  activeElement = String(this.tabs[0]);

  get activeItemIndex(): number {
    if (this.collaborators.includes(this.activeElement)) {
      return this.tabs.indexOf(this.collaborators);
    }

    return this.tabs.indexOf(this.activeElement);
  }

  stop(event: Event): void {
    // We need to stop tab custom event so parent component does not think its active
    event.stopPropagation();
  }

  onClick(activeElement: string): void {
    this.activeElement = activeElement;
  }

  isString(tab: unknown): tab is string {
    return tuiIsString(tab);
  }
}

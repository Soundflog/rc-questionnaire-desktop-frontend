import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { NavigationService } from './navigation.service';
import { Location } from '@angular/common';
import { PageContentService } from './page-content.service';
import {Title} from "@angular/platform-browser";
import {patients} from "../../../data/patients";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  title = "RehabSurvey";
  pageText = this.pageContentService.pageText$
  // user = patients[0]
  // username = this.user.lastName + " " + this.user.firstName + " " + this.user.middleName
  constructor(
      private _location: Location,
      private navigationService: NavigationService,
      private pageContentService: PageContentService,
      private titleService: Title,
      private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.navigationService.initialize();

    this.navigationService.title$.subscribe((title) => {
        this.titleService.setTitle(`${title}`);
        this.pageContentService.updatePageContent(title, title);
    });

    this.pageContentService.pageTitle$.subscribe((title) => {
        this.title = title;
    });
  }

  logout(){
    this.authService.logout()
  }

  backClicked() {
      this._location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Location } from '@angular/common';
import { PageContentService } from './page-content.service';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
    title = "НАЗВАНИЕ из data";
    pageText = ''
    constructor(
        private _location: Location,
        private navigationService: NavigationService,
        private pageContentService: PageContentService,
        private titleService: Title  // Добавьте это
    ) {}

    ngOnInit(): void {
        this.navigationService.initialize();

        this.navigationService.title$.subscribe((title) => {
            this.titleService.setTitle(`${title}`);
            this.pageContentService.updatePageContent(title, '');
        });

        this.pageContentService.pageTitle$.subscribe((text) => {
            this.pageText = text;
        });
    }


    backClicked() {
        this._location.back();
    }
}

import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'
import {PageContentService} from "../../components/navigation/page-content.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-anketirovanie-page',
  templateUrl: './anketirovanie-page.component.html',
  styleUrls: ['./anketirovanie-page.component.less', './anketirovanie-page.component.scss']
})
export class AnketirovaniePageComponent implements OnInit {
  pageTitle = 'angular app';
  pageText = ''
  loading = false;
  term = '';

  constructor(
    public productsService: ProductsService,
    public pageContentService: PageContentService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });

    this.route.data.subscribe((data) => {
      this.pageTitle = data.title || 'Default Title';
      this.pageText = data.text || 'Default Text';

      this.pageContentService.updatePageContent(this.pageTitle, this.pageText);
    });
  }
}

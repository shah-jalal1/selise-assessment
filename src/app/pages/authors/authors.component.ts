import { Component, OnInit } from '@angular/core';
import {Authors} from "../../interfaces/authors";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorsService} from "../../services/authors.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Pagination} from "../../interfaces/pagination";


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  allAuthors: any = [];

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 5;
  totalProductsStore = 0;

  holdPrevData: any = [];

  pageSlice: any;

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorsService: AuthorsService
  ) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  private getAllAuthors() {
    this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    this.authorsService.getAllExpenses(pagination)
      .subscribe(res => {
        this.allAuthors = res.results
        console.log(res)
        this.holdPrevData = res.results;
        this.totalProducts = res.totalCount;
        this.totalProductsStore = res.totalCount;
        this.productsPerPage = res.count;
        this.currentPage = res.page;

        console.log("current page", this.currentPage);
        console.log("product per page", this.productsPerPage);
        console.log("total ", this.totalProducts);
        // this.pageSlice = this.allAuthors.slice(0, 3);
        this.spinner.hide();

      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    console.log(event)
    this.router.navigate([], {queryParams: {page: event}});
  //   const startIndex = event.pageIndex * event.pageSize;
  //   let endIndex = startIndex + event.pageSize;
  //   if (endIndex > this.allAuthors) {
  //     endIndex = this.allAuthors.length;
  //   }
  //   this.pageSlice = this.allAuthors.slice(startIndex, endIndex);
  //
  }

}

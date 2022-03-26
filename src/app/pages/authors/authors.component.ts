import { Component, OnInit } from '@angular/core';
import {Authors} from "../../interfaces/authors";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorsService} from "../../services/authors.service";
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  allAuthors: Authors[] = [];

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

    this.authorsService.getAllExpenses()
      .subscribe(res => {
        console.log(res.results)
        this.spinner.hide();

      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

}

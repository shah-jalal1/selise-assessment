import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxPaginationModule} from "ngx-pagination";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {AuthorsListModule} from "../../components/authors-list/authors-list.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    AuthorsListModule,
    FormsModule
  ]
})
export class AuthorsModule { }

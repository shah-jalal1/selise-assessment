import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsListComponent } from './authors-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        AuthorsListComponent
    ],
    exports: [
        AuthorsListComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AuthorsListModule { }

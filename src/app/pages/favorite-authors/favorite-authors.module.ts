import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteAuthorsRoutingModule } from './favorite-authors-routing.module';
import { FavoriteAuthorsComponent } from './favorite-authors.component';


@NgModule({
  declarations: [
    FavoriteAuthorsComponent
  ],
  imports: [
    CommonModule,
    FavoriteAuthorsRoutingModule
  ]
})
export class FavoriteAuthorsModule { }

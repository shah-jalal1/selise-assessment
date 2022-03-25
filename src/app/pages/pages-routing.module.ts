import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'author', pathMatch: 'full'},
      {
        path: 'author',
        loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule),
      },
      {
        path: 'favorite-authors',
        loadChildren: () => import('./favorite-authors/favorite-authors.module').then(m => m.FavoriteAuthorsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

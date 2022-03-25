import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    PagesComponent,
    SidenavComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatDividerModule,
        MatListModule
    ]
})
export class PagesModule { }

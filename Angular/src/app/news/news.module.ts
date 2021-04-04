import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    RouterModule.forChild(NewsRoutingModule),
    CommonModule,
    FormsModule,
    NgbModule,
    DataTablesModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [NewsComponent]
})
export class NewsModule { }

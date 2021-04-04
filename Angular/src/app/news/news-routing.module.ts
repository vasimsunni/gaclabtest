import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from "./news.component";

export const NewsRoutingModule: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NewsComponent,
        data: {
          title: 'News',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'News' }
          ]
        },
      },
    ]
  }
];


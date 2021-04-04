import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from "./about-us.component";

export const AboutUsRoutingModule: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AboutUsComponent,
        data: {
          title: 'About Us',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'About Us' }
          ]
        },
      },
    ]
  }
];


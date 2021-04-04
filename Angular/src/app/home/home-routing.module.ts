import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home.component";

export const HomeRoutingModule: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  }
];


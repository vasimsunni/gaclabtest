import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from "./contact.component";

export const ContactRoutingModule: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ContactComponent,
        data: {
          title: 'Contact Us',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Contact Us' }
          ]
        },
      },
    ]
  }
];


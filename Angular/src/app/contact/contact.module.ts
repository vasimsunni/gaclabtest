import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    RouterModule.forChild(ContactRoutingModule),
  ],
  providers: [],
  bootstrap: [ContactComponent]
})
export class ContactModule { }

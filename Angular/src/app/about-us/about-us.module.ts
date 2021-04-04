import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  declarations: [
    AboutUsComponent,
  ],
  imports: [
    RouterModule.forChild(AboutUsRoutingModule),
  ],
  providers: [],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }

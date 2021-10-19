import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlainLayoutComponent } from './layout/plain-layout/plain-layout.component';



@NgModule({
  declarations: [

    FooterComponent,
    HeaderComponent,
    PlainLayoutComponent,

  ],
  imports: [
    CommonModule,
    NbLayoutModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,PlainLayoutComponent
  ]
})
export class SharedModule { }

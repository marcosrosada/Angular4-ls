import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'primeng/primeng';

import { SharedModule } from './../shared/module/shared/shared.module';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    AccordionModule,
    AccordionRoutingModule
  ],
  declarations: [
    AccordionComponent
  ]
})
// I decided to add 'My' prefix before the name module to haven't conflit with AccordionModule from PrimeNG
export class MyAccordionModule { }

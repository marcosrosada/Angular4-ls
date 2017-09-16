import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionRoutingModule
  ],
  declarations: [
    AccordionComponent
  ]
})
export class AccordionModule { }

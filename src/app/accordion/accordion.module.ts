import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';
import { UserComponent } from './../user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccordionRoutingModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    CalendarModule
  ],
  declarations: [
    AccordionComponent,
    UserComponent
  ]
})
// I decided to add 'My' prefix before the name module to haven't conflit with AccordionModule from PrimeNG
export class MyAccordionModule { }

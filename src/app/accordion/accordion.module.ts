import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';
import { UserComponent } from './../user/user.component';
import { MessageComponent } from './../message/message.component';
import { RestService } from './../shared/service/rest/rest.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AccordionRoutingModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    CalendarModule
  ],
  declarations: [
    AccordionComponent,
    UserComponent,
    MessageComponent
  ],
  providers: [
    RestService
  ]
})
// I decided to add 'My' prefix before the name module to haven't conflit with AccordionModule from PrimeNG
export class MyAccordionModule { }

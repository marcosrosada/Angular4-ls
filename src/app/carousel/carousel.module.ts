import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { CalendarModule } from 'primeng/primeng';

import { SharedModule } from './../shared/module/shared/shared.module';
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CalendarModule,
    SharedModule,
    CarouselRoutingModule
  ],
  declarations: [
    CarouselComponent
  ]
})
export class CarouselModule { }

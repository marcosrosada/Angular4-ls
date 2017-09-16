import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { CarouselRoutingModule } from './carousel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselRoutingModule
  ],
  declarations: [CarouselComponent]
})
export class CarouselModule { }

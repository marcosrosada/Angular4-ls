import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarouselComponent } from './carousel.component';

const carouselRoutes: Routes = [
    { path: '', component: CarouselComponent }
];

@NgModule({
    imports: [RouterModule.forChild(carouselRoutes)],
    exports: [RouterModule]
})
export class CarouselRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionComponent } from './accordion.component';

const accordionRoutes: Routes = [
    { path: '', component: AccordionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(accordionRoutes)],
    exports: [RouterModule]
})
export class AccordionRoutingModule {}
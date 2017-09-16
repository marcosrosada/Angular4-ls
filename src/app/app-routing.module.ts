import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRouter: Routes = [
    { path: '', component: HomeComponent },
    { path: 'accordion', loadChildren: 'app/accordion/accordion.module#MyAccordionModule' },
    { path: 'carousel', loadChildren: 'app/carousel/carousel.module#CarouselModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
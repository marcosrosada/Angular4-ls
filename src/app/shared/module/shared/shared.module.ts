import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/primeng';

import { UserComponent } from './../../../user/user.component';
import { MessageComponent } from './../../../message/message.component';
import { RestService } from './../../../shared/service/rest/rest.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  declarations: [
    UserComponent,
    MessageComponent
  ],
  exports: [
    UserComponent,
    MessageComponent
  ],
  providers: [
    RestService
  ]
})
export class SharedModule { }

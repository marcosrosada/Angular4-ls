import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {};

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(formUser) {
    console.log('From User', this.user);
    console.log('From Form', formUser.value);
  }

}

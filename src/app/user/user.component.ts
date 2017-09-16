import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
  
  onSubmit(form) {
    console.log('From User', this.user);
    console.log('From Form', form);
  }

}

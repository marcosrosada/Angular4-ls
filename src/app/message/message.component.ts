import { Component, OnInit } from '@angular/core';
import { RestService } from './../shared/service/rest/rest.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string = '';

  constructor(private _restService: RestService) { }

  ngOnInit() {
    // This is a MOCK message just to test in the view. Should be delete
    this.message = "Congrats. You've managed to do the api call!"
    
    this._restService.get('api/test')
        .subscribe(data => this.message = data.value);
  }

}

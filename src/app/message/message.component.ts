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
    this._restService.get('api/test')
        .subscribe(data => this.message = data.value);
      
    this.message = "Congrats. You've managed to do the api call!"
  }

}

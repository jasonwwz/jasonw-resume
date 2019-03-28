import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-state-service',
  templateUrl: './state-service.component.html',
  styleUrls: ['./state-service.component.scss']
})
export class StateServiceComponent implements OnInit {

  content: any = {};
  contentValue: Subject<any> = new  Subject<any>();

  constructor() {
    this.contentValue.subscribe((value) => {
      this.content = value;
    });
  }

  ngOnInit() {
  }

  setContentValue(value) {
    this.contentValue.next(value);
  }


}

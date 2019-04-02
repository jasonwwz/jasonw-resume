import { Component, OnInit } from '@angular/core';
import {StateServiceComponent} from '../service/state-service/state-service.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  edu: any

  constructor(private stateService: StateServiceComponent) { }

  ngOnInit() {
    this.getEdu();
  }

  getEdu() {
    if (this.stateService.content && this.stateService.content.edu) {
      this.edu = this.stateService.content.edu;
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {StateServiceComponent} from '../service/state-service/state-service.component';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
  panelOpenState = false;
  works: any;

  constructor(private stateService: StateServiceComponent) {
  }

  ngOnInit() {
    this.getWork();
  }

  getWork() {
    if (this.stateService.content && this.stateService.content.work) {
      this.works = this.stateService.content.work;
    }
  }

}

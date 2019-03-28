import {Component, OnInit} from '@angular/core';
import {StateServiceComponent} from '../service/state-service/state-service.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: any;

  constructor(private stateService: StateServiceComponent) {
  }

  ngOnInit() {
    this.getSummary();
  }

  getSummary() {
    if (this.stateService.content && this.stateService.content.summary) {
      this.summary = this.stateService.content.summary;
    }
  }
}

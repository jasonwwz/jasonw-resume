import {Component, OnInit} from '@angular/core';
import {StateServiceComponent} from '../service/state-service/state-service.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  objective: string;

  constructor(private stateService: StateServiceComponent) {
  }

  ngOnInit() {
    this.getObject();
  }

  getObject() {
    if (this.stateService.content && this.stateService.content.objective) {
      this.objective = this.stateService.content.objective;
    }
  }

}

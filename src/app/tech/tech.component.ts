import {Component, OnInit} from '@angular/core';
import {StateServiceComponent} from '../service/state-service/state-service.component';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  tech: any;

  constructor(private stateService: StateServiceComponent) {
  }

  ngOnInit() {
    this.getTech();
  }

  getTech() {
    if (this.stateService.content && this.stateService.content.tech) {
      this.tech = this.stateService.content.tech;
    }
  }
}

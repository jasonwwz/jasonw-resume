import {Component, OnInit} from '@angular/core';
import {StateServiceComponent} from './service/state-service/state-service.component';
import {ServiceComponent} from './service/service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'jasoncv';
  content: any = {};
  isLoaded = false;

  constructor(
    private contentService: ServiceComponent,
    private stateService: StateServiceComponent
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.contentService.getData().subscribe(res => {
        // console.log('result = ' + JSON.stringify(res));
        this.content = res;
        if (this.content) {
          this.stateService.setContentValue(this.content);
          this.isLoaded = true;
        }
      },
      err => {
        console.log(err);
      });
  }


}

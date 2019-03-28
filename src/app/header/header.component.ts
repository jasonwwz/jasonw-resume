import {Component, OnInit} from '@angular/core';
import {ServiceComponent} from '../service/service.component';
import {HeaderModel} from '../model/header-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerModel = new HeaderModel('', '', '', '');
  result: any;

  constructor(private service: ServiceComponent) {
  }

  ngOnInit() {
    this.getHeaderData();
  }

  getHeaderData() {
    this.service.getData().subscribe(res => {
        this.result = res;
        if (this.result && this.result.header) {
          this.headerModel = this.result.header;
        }
      },
      error => {
        console.log(error);
      });
  }
}

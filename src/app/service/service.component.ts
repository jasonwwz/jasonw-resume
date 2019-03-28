import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
  }

  getData() {
    console.log('getData ... ');
    const url = '../../assets/data/jason.json';
    console.log('URL = ' + url);
    return this.httpService.get(url);
  }

}

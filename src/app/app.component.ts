import { Component, OnInit } from '@angular/core';
import { TestService  } from './service/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  
  message: string = '';
  
  constructor(private testService :TestService,
              private http: HttpClient) {};
  
  ngOnInit() {
    this.message = 'Hello World';
  }
  
  public test() {
    this.http.get<string>('/test').subscribe(data => {
      this.message = data['result'];
    });
  }
}

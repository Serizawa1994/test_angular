import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(protected http: HttpClient) { }
  
  public test(): Observable<string> 
  {
    return this.http.get<string>('/test');
  }
}

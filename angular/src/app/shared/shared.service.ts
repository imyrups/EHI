import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SharedService {
  // this will be used wihle making actual service api calls
  constructor(private http: HttpClient) { }
}

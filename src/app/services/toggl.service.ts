import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';

@Injectable()
export class TogglService {

  constructor(private http: HttpClient) { }

}

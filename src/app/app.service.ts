import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private httpClient: HttpClient) { }

  putFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'https://webscaledemo.netapp.com/asup-file-upload/' + fileToUpload.name;
    return this.httpClient
      .put(endpoint, fileToUpload)
      .map(() => { return true; });
    }
}

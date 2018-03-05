import { Message } from '../message';
import { Upload } from '../upload';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient,
  HttpEvent,
  HttpEventType,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { catchError, last, map, tap } from 'rxjs/operators';


@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) { }

  putFile(upload: Upload): Observable<Message> {
    if (!upload.file) { return; }

    upload.endpoint = 'https://webscaledemo.netapp.com/asup-file-upload/' + upload.caseNumber + '-' + upload.file.name;
    const putRequest = new HttpRequest('PUT', upload.endpoint, upload.file, {reportProgress: true});

    return this.http
      .request(putRequest)
      .pipe(
        map(event => this.getEventMessage(event, upload)),
        tap(message => this.showProgress(message, upload)),
        last(), // return last (completed) message to caller
        catchError(this.handleError(upload.file))
      );
  }

  /** Return distinct message for sent, upload progress, & response events */
  private getEventMessage(event: HttpEvent<any>, upload: Upload) {
    switch (event.type) {
      case HttpEventType.Sent:
        return new Message(`Uploading file "${upload.file.name}" of size ${upload.file.size} to ${upload.endpoint}.`, 'info');

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return new Message(`File "${upload.file.name}" upload status: "${event.loaded}"/"${event.total}" (${percentDone}%) uploaded.`, 'info');

      case HttpEventType.Response:
        return new Message(`File "${upload.file.name}" was completely uploaded to ${upload.endpoint}!`, 'info');

      default:
        return new Message(`File "${upload.file.name}" surprising upload event: ${event.type}.`, 'info');
    }
  }

  /**
   * Returns a function that handles Http upload failures.
   * @param file - File object for file being uploaded
   *
   * When no `UploadInterceptor` and no server,
   * you'll end up here in the error handler.
   */
  private handleError(file: File) {
    const userMessage = `${file.name} upload failed.`;

    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const errorMessage = (error.error instanceof Error) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.message}"`;

      const message = new Message (`${userMessage} ${errorMessage}`, 'danger');

      // Let app keep running but indicate failure.
      return of(message);
    };
  }

  private showProgress(message: Message, upload: Upload) {
    upload.message = message;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Testimonial } from './testimonial';
import { Gallery } from './gallery';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class StaticContentService {
	private publicGalleryUrl = 'http://3.83.162.199/api/gallery';
  private publicOccasionUrl = 'http://3.83.162.199/api/occasions';
  private publicServiceUrl = 'http://3.83.162.199/api/services';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getPublicGallery() {
    return this.http
      .get<Gallery[]>(this.publicGalleryUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPublicOccasion(): Observable<any> {
    return this.http
      .get(this.publicOccasionUrl)
      .pipe(map(this.extractData),
        catchError(this.handleError)
      );
  }

  getPublicservice(): Observable<any> {
    return this.http
      .get(this.publicServiceUrl)
      .pipe(map(this.extractData),
        catchError(this.handleError)
      );
  }

  
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl = 'https://localhost:4433/sharingvision/api';
  private token = localStorage.getItem('token');
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Sharing-API': 'sharingvision',
      'Authorization': localStorage.getItem('token') || '{}',
    })
  };
  
  constructor(private http: HttpClient) { }
  
  getAll(params: any, status: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/semuaArticle?status=' + status , { params, headers: this.httpOptions['headers'] } );
  }
  
  getDaftarPostsById(id: any) {
    return this.http.get(this.baseUrl + '/article1?id=' + id, { headers: this.httpOptions['headers'] } );
  }
  
  updatePosts(posts: any): Observable<Object>  {
    return this.http.post<Object>(this.baseUrl + '/ubahArticle', posts, this.httpOptions)
      .pipe(
        catchError(this.handleError('Error Ketika Mendapatkan Data', posts))
      );
  }
  
  createPosts(posts: Object): Observable<Object>  {
    return this.http.post<Object>(this.baseUrl + '/article', posts, this.httpOptions)
      .pipe(
        catchError(this.handleError('Error Ketika Mendapatkan Data', posts))
      );
  }
  
  hapusPosts(id: any) {
    return this.http.delete(this.baseUrl + '/hapusArticle/' + id, { headers: this.httpOptions['headers'], responseType: 'text' });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
 
}

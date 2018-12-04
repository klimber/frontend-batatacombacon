import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type': 'multipart/form-data',
    'accept': '*/*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageUrl = 'https://backendcombacon.herokuapp.com/images';

  constructor(private http: HttpClient) { }

  addImage(imagem: any): Observable<any> {
    const formData = new FormData();
    formData.append('imagem', imagem);

    return this.http.post<any>(this.imageUrl, formData, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getImage(id: number): Observable<any> {
    return this.http.get<any>(`${this.imageUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) { 
    return error;
  }
}

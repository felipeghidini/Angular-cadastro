import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from '../models/foto.model';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private serviceUrl2 = 'https://jsonplaceholder.typicode.com/photos';


  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Foto[]>{
    return this.http.get<Foto[]>(this.serviceUrl2)
  }
}

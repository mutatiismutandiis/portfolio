import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'http://localhost:8080/educaciones/';

  constructor(private http:HttpClient) { }

  public getEducacion(): Observable<educacion>{
    return this.http.get<educacion>(this.URL+'traer/perfil');
  }
}

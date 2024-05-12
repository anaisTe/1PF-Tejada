import { Injectable } from '@angular/core';
import { AlumniData } from '../models/alumnos.model';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(
    private _httpClient: HttpClient
  ) {}

  getAlumnos(): Observable<AlumniData[]> {
    return this._httpClient.get<AlumniData[]>(`${environment.baseAPIURL}/estudiantesBD`)
  }

  postAlumnos(usuario: AlumniData): Observable<AlumniData[]> {
    return this._httpClient.post<AlumniData[]>(`${environment.baseAPIURL}/estudiantesBD`, usuario)
  }

  editAlumno(usuario: AlumniData): Observable<AlumniData[]> {
    const id = usuario.id;
    return this._httpClient.put<AlumniData[]>(`${environment.baseAPIURL}/estudiantesBD/${id}`, usuario)
  }

  deleteAlumno(Id: number): Observable<unknown> {
    const url = `${environment.baseAPIURL}/estudiantesBD/${Id}`;
    return this._httpClient.delete(url).pipe(
      catchError(err => {
      throw 'error in source. Details: ' + err;
    }))
  }
}

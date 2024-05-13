import { Injectable } from '@angular/core';
import { ICreateHistoricoCurso, ICursos, IHistoricoCurso } from '../models/cursos.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private _httpClient: HttpClient
  ) {}

  getCursos(): Observable<ICursos[]> {
    return this._httpClient.get<ICursos[]>(`${environment.baseAPIURL}/itemCursoSelect`)
  }

  // createHistoricoCurso(data: ICreateHistoricoCurso) {
  //   if (data.cursoName && data.alumnoName && data.nota) {
  //     const newDato: IHistoricoCurso = {
  //       id: Math.floor(Math.random() * 100000),
  //       cursoName: data.cursoName,
  //       alumnoName: data.alumnoName,
  //       nota: data.nota,
  //     };
  //     cursoTableBd.push(newDato);
  //   }
  //   return of(cursoTableBd);
  // }

  getCursosHistorico(): Observable<IHistoricoCurso[]> {
    return this._httpClient.get<IHistoricoCurso[]>(`${environment.baseAPIURL}/cursosBD`)
  }
  
  postCurso(newCurso: ICreateHistoricoCurso): Observable<ICreateHistoricoCurso[]> {
    return this._httpClient.post<ICreateHistoricoCurso[]>(`${environment.baseAPIURL}/cursosBD`, newCurso)
  }
}

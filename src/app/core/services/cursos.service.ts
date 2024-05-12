import { Injectable } from '@angular/core';
import { ICreateHistoricoCurso, ICursos, IHistoricoCurso } from '../../shared/models/cursos.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

const cursosBd: ICursos[] = [
  {
    id: 1,
    course: 'ANGULAR'
  },
  {
    id: 2,
    course: 'REACTJS'
  },
  {
    id: 3,
    course: 'DISEÑO'
  }
]

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private _httpClient: HttpClient
  ) {}

  getCursos(): Observable<ICursos[]> {
    return of(cursosBd)
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

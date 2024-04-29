import { Injectable } from '@angular/core';
import { ICursos } from '../../shared/models/cursos.model';
import { Observable, of } from 'rxjs';

const cursosBd: ICursos[] = [
  {
    id: 1,
    curso: 'ANGULAR'
  },
  {
    id: 2,
    curso: 'REACTJS'
  },
  {
    id: 3,
    curso: 'DISEÑO'
  }
]

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(): Observable<ICursos[]> {
    return of(cursosBd)
  }
}

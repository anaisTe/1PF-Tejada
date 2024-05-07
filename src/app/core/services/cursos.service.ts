import { Injectable } from '@angular/core';
import { ICreateHistoricoCurso, ICursos, IHistoricoCurso } from '../../shared/models/cursos.model';
import { Observable, of } from 'rxjs';

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

const cursoTableBd:IHistoricoCurso[] = [
  // {
  //   id: 1,
  //   alumnoName: {
  //     id: 10344, 
  //     lastName: 'Casas', 
  //     name: 'Roberto', 
  //     email: 'roberto@mail.com', 
  //     course: 'ANGULAR', 
  //     createdAt: new Date(),
  //   },
  //   cursoName: {
  //     id: 1,
  //     course: 'ANGULAR'
  //   },
  //   nota: 12
  // }
]

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(): Observable<ICursos[]> {
    return of(cursosBd)
  }

  createHistoricoCurso(data: ICreateHistoricoCurso) {
    if (data.cursoName && data.alumnoName && data.nota) {
      const newDato: IHistoricoCurso = {
        id: Math.floor(Math.random() * (999999 - 100000)) + 100000,
        cursoName: data.cursoName,
        alumnoName: data.alumnoName,
        nota: data.nota,
      };
      cursoTableBd.push(newDato);
    }
    return of(cursoTableBd);
  }
}

import { Injectable } from '@angular/core';
import { ICursos, INotif } from '../../shared/models/home.model';
import { Observable, of } from 'rxjs';

const cursosBD: ICursos[] = [
  {
    titulo: 'Desarrollo web',
    categoria: 'Programación',
    fecha: '01 Abr 2024, 03:30pm',
    tag: 'En curso'
  },
  {
    titulo: 'Photoshop e Illustrator',
    categoria: 'Diseño UX/UI',
    fecha: '20 Abr 2024, 06:30pm',
    tag: 'En curso'
  },
  {
    titulo: 'Google Ads',
    categoria: 'Negocio',
    fecha: '02 Oct 2023, 04:30pm',
    tag: 'Culminado'
  }
]

const notiBd: INotif[] = [
  {
    title: 'Creación de website',
    cod: 'Clase 15609'
  },
  {
    title: 'Prototipos',
    cod: 'Clase 12512'
  },
  {
    title: 'Primera entrega PF',
    cod: 'Clase 15609'
  },
  {
    title: 'Primera entrega PF',
    cod: 'Clase 15609'
  },
]

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getCursos(): Observable<ICursos[]> {
    return of(cursosBD)
  }

  getNotif(): Observable<INotif[]> {
    return of(notiBd)
  }
}

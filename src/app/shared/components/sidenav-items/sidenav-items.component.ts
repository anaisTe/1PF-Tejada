import { Component } from '@angular/core';
import { menuItem } from '../../models/sidenav.model';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrl: './sidenav-items.component.scss'
})
export class SidenavItemsComponent {

  sidenavItems: menuItem[] = [
    {
      textName: 'Inicio',
      path: '/inicio'
    },
    {
      textName: 'Lista de alumnos',
      path: '/alumnos'
    },
    {
      textName: 'Cursos',
      path: '/cursos'
    }
  ]
}

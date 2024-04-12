import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrl: './sidenav-items.component.scss'
})
export class SidenavItemsComponent {

  sidenavItems = [
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

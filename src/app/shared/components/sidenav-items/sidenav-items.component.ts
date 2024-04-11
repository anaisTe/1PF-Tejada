import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrl: './sidenav-items.component.scss'
})
export class SidenavItemsComponent {

  sidenavItems = [
    {
      textName: 'Inicio'
    },
    {
      textName: 'Lista de alumnos'
    },
    {
      textName: 'ABM'
    }
  ]
}

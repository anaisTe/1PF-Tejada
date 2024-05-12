import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../core/services/sidenav.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrl: './sidenav-items.component.scss'
})
export class SidenavItemsComponent implements OnInit {

  constructor(
    private _sidenavService: SidenavService,
    private _loginService: LoginService,
    private router: Router
  ){}

  ItemSidenav = this._sidenavService.getItemSidenav();

  goOut() {
    Swal.fire({
      title: "¿Está seguro de cerrar la sesión?",
      icon: "warning",
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#ffffff',
      cancelButtonColor: '#212121'
    }).then( (result) => {
      if(result.isConfirmed) {
        this._loginService.logout();
        this.router.navigate(['login'])
      }
    })

  }

  ngOnInit(): void {
    
  }
}

import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()

export class SidenavService {

  private sidenav!: MatSidenav;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  closeSidenav():void {
    this.sidenav.close();
  }

  toggle(): void {
    this.sidenav.toggle();
  }
}
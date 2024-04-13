import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../core/services/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(
    private _sidenavService: SidenavService
  ) {}

  ngAfterViewInit(): void {
    this._sidenavService.setSidenav(this.sidenav);
  }
}

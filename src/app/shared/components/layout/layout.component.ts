import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

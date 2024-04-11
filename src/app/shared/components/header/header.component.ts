import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer,
    private _sidenavService: SidenavService
  ) {
    this.iconRegistry.addSvgIcon(
      "coffe",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/bx-coffee.svg")
    );

  }

  openSideNav() {
    this._sidenavService.toggle()
  }
}

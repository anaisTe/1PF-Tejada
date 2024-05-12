import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../../../core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(    
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer,
    private _homeBd: HomeService
  ) {
    this.iconRegistry.addSvgIcon(
      "bookmark",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/bx-book-bookmark.svg")
    );
  }

  cursosHome = this._homeBd.getCursosHome();

  notiListHome = this._homeBd.getNotifHome();

  setTagColor(color: string) {
    switch(color) {
      case 'En curso':
        return 'tag-enCurso';
      case 'Pendiente':
        return 'tag-pendiente';
      default:
        return 'tag-finalizado';
    }
  }


}

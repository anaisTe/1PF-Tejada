import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Cursos } from '../../shared/models/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(    
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      "bookmark",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/bx-book-bookmark.svg")
    );
  }

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

  cursos: Cursos[] = [
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
}

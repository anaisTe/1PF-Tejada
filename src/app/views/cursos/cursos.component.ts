import { Component } from '@angular/core';
import { CursosService } from '../../core/services/cursos.service';
import { AlumnosService } from '../../core/services/alumnos.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  constructor(
    private _cursosService: CursosService,
    private _alumnoService: AlumnosService
  ) {}

  cursosForm = new FormGroup({
    cursoName: new FormControl(),
    alumnoName: new FormControl(),
    nota: new FormControl()
  })

  cursos = this._cursosService.getCursos();
  alumnos = this._alumnoService.getAlumnos();

  saveBtn() {
    console.log(this.cursosForm.value);
    
  }
}

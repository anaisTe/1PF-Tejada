import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../core/services/cursos.service';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ICursoForm, IHistoricoCurso } from '../../../shared/models/cursos.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  constructor(
    private _cursosService: CursosService,
    private _alumnoService: AlumnosService
  ) {}

  cursosForm = new FormGroup<ICursoForm>({
    cursoName: new FormControl(null, Validators.required),
    alumnoName: new FormControl(null, Validators.required),
    nota: new FormControl(1,[
      Validators.required, 
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.max(20)
    ])
  })

  cursos = this._cursosService.getCursos();

  cursoSeleccionado: any[] = [];
  alumnosLista: any[] = [];
  cursoVal = '';
  alumnosSelectList: any[] = [];

  displayedColumns: string[] = ['id', 'name', 'lastName','course', 'nota'];
  estudiantesTable: IHistoricoCurso[] = [];

  saveBtn() {
    if (this.cursosForm.invalid) {
      this.cursosForm.markAllAsTouched();
    } else {
      // Swal.fire({
      //   title: 'Registro exitoso',
      //   icon: 'success',
      //   confirmButtonColor: '#aeea00',
      //   confirmButtonText: 'Aceptar',
      // })
      // this.estudiantesTable = [this.cursosForm.value];
      this._cursosService.createHistoricoCurso(this.cursosForm.value).subscribe({
        next: (val:any) => {
          // console.log('saveBtn',val);
          // this.estudiantesTable = val
          this.estudiantesTable = val
          console.log('fff',this.estudiantesTable);
          
        },
      })
      // console.log(this.cursosForm.value);
    } 
  }

  cursoSelectVal() {    
    this.cursosForm.get('cursoName')?.valueChanges.subscribe({
      
      next: (val) => {
        this.cursoSeleccionado = [val];
        this.cursoSeleccionado.map( ele => {
          this.cursoVal = ele.course
        })
        this.alumnoSelectVal();
      }
    })
  }

  alumnoSelectVal() {
    this._alumnoService.getAlumnos().subscribe({
      next: (val) => {
        this.alumnosLista = val
        
        const dato = this.alumnosLista.filter((ele) => ele.course == this.cursoVal)
        
        this.alumnosSelectList = dato

      }
    })
  }

  ngOnInit() {
    this.cursoSelectVal();
    this.alumnoSelectVal();
    
  }

  get cursoControl() {
    return this.cursosForm.get('cursoName');
  }

  get alumnoControl() {
    return this.cursosForm.get('alumnoName');
  }

  get notaControl() {
    return this.cursosForm.get('nota');
  }
}

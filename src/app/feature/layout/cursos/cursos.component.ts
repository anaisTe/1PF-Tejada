import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from '../../../core/services/cursos.service';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ICursoForm, IHistoricoCurso } from '../../../shared/models/cursos.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit, AfterViewInit {
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
  cursoVal = '';
  alumnosSelectList: any[] = [];

  displayedColumns: string[] = ['id', 'name', 'lastName','course', 'nota'];
  estudiantesTable = new MatTableDataSource<IHistoricoCurso>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.estudiantesTable.paginator = this.paginator;
  }

  saveBtn() {
    if (this.cursosForm.invalid) {
      this.cursosForm.markAllAsTouched();
    } else {
      Swal.fire({
        title: 'Registro exitoso',
        icon: 'success',
        confirmButtonColor: '#aeea00',
        confirmButtonText: 'Aceptar',
      }).then( (result) => {
        if(result.isConfirmed) {
          setTimeout( () => {
            window.location.reload();
          }, 2000)
        }
      })
      this._cursosService.postCurso(this.cursosForm.value).subscribe()
      // console.log(this.cursosForm.value);
    } 
  }

  cursoSelectVal() {    
    this.cursosForm.get('cursoName')?.valueChanges.subscribe({
      
      next: (val) => {
        [val].map( ele => {
          this.cursoVal = ele.course
        })
        this.alumnoSelectVal();
      }
    })
  }

  alumnoSelectVal() {
    this._alumnoService.getAlumnos().subscribe({
      next: (val) => {        
        const dato = val.filter((ele) => ele.course == this.cursoVal)
        
        this.alumnosSelectList = dato
      }
    })
  }

  ngOnInit() {
    this.cursoSelectVal();
    this.alumnoSelectVal();
    
    this._cursosService.getCursosHistorico().subscribe({
      next: (value: IHistoricoCurso[]) => {
        this.estudiantesTable.data = value
      },
      error: (err) => {
        console.warn(err);
        Swal.fire({
          title: 'Ocurrio un error',
          icon: 'error',
          confirmButtonColor: '#aeea00',
          confirmButtonText: 'Cerrar',
        });
      }
    });
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

import { FormControl } from "@angular/forms";
import { AlumniData } from "./alumnos.model";

export interface ICursos {
    id: number | null;
    course: string | null;
}

export interface ICursoForm {
    cursoName: FormControl<ICursos | any>;
    alumnoName: FormControl<AlumniData | any>;
    nota: FormControl<number | any>;
}

export interface IHistoricoCurso {
    id: number;
    cursoName: ICursos;
    alumnoName: AlumniData;
    nota: number;
}

export interface ICreateHistoricoCurso {
    cursoName?: ICursos;
    alumnoName?: AlumniData;
    nota?: number;
}
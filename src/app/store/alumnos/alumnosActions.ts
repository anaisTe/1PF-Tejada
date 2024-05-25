// // alumnosActions.ts
// import { createAction, props } from '@ngrx/store';
// import { AlumniData } from '../../core/models/alumnos.model';

// export const fetchAlumnos = createAction('[Alumnos] Fetch Alumnos');
// export const fetchAlumnosSuccess = createAction(
//   '[Alumnos] Fetch Alumnos Success',
//   props<{ payload: AlumniData[] }>()
// );
// export const fetchAlumnosFailure = createAction(
//   '[Alumnos] Fetch Alumnos Failure',
//   props<{ payload: string }>()
// );
// export const addAlumno = createAction(
//   '[Alumnos] Add Alumno',
//   props<{ payload: AlumniData }>()
// );
// export const editAlumno = createAction(
//   '[Alumnos] Edit Alumno',
//   props<{ payload: AlumniData }>()
// );
// export const deleteAlumno = createAction(
//   '[Alumnos] Delete Alumno',
//   props<{ payload: number }>()
// );


import { createAction, props } from '@ngrx/store';
import { AlumniData } from '../../core/models/alumnos.model';

export const loadAlumnos = createAction('[Alumnos] Load Alumnos');

export const loadAlumnosSuccess = createAction(
  '[Alumnos] Load Alumnos Success',
  props<{ data: AlumniData[] }>()
);

export const loadAlumnosFailure = createAction(
  '[Alumnos] Load Alumnos Failure',
  props<{ error: any }>()
);

export const addAlumno = createAction(
  '[Alumnos] Add Alumno',
  props<{ alumno: AlumniData }>()
);

export const editAlumno = createAction(
  '[Alumnos] Edit Alumno',
  props<{ alumno: AlumniData }>()
);

export const deleteAlumno = createAction(
  '[Alumnos] Delete Alumno',
  props<{ id: number }>()
);

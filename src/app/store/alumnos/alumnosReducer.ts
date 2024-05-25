// import { createReducer, on } from '@ngrx/store';
// import { fetchAlumnos, fetchAlumnosSuccess, fetchAlumnosFailure, addAlumno, editAlumno, deleteAlumno } from './alumnosActions';
// import { AlumniData } from '../../core/models/alumnos.model';

// export interface AlumnosState {
//   data: AlumniData[];
//   loading: boolean;
//   error: string | null;
// }

// export const initialState: AlumnosState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// export const alumnosReducer = createReducer(
//   initialState,
//   on(fetchAlumnos, (state) => ({
//     ...state,
//     loading: true
//   })),
//   on(fetchAlumnosSuccess, (state, { payload }) => ({
//     ...state,
//     loading: false,
//     data: payload
//   })),
//   on(fetchAlumnosFailure, (state, { payload }) => ({
//     ...state,
//     loading: false,
//     error: payload
//   })),
//   on(addAlumno, (state, { payload }) => ({
//     ...state,
//     data: [...state.data, payload]
//   })),
//   on(editAlumno, (state, { payload }) => ({
//     ...state,
//     data: state.data.map(alumno => 
//       alumno.id === payload.id ? payload : alumno
//     )
//   })),
//   on(deleteAlumno, (state, { payload }) => ({
//     ...state,
//     data: state.data.filter((alumno) => alumno.id !== payload)
//   }))
// );

import { createReducer, on } from '@ngrx/store';
import { AlumniData } from '../../core/models/alumnos.model';
import * as AlumnosActions from './alumnosActions';

export interface AlumnosState {
  alumnos: AlumniData[];
}

export const initialState: AlumnosState = {
  alumnos: []
};

export const alumnosReducer = createReducer(
  initialState,
  on(AlumnosActions.loadAlumnosSuccess, (state, { data }) => ({
    ...state,
    alumnos: data
  })),
  on(AlumnosActions.addAlumno, (state, { alumno }) => ({
    ...state,
    alumnos: [...state.alumnos, alumno]
  })),
  on(AlumnosActions.editAlumno, (state, { alumno }) => ({
    ...state,
    alumnos: state.alumnos.map(a =>
      a.id === alumno.id ? { ...a, ...alumno } : a
    )
  })),
  on(AlumnosActions.deleteAlumno, (state, { id }) => ({
    ...state,
    alumnos: state.alumnos.filter(a => a.id !== id)
  }))
);

// import { createSelector } from '@ngrx/store';
// import { AlumnosState } from './alumnosReducer';


// const selectAlumnosState = (state: { alumnos: AlumnosState }) => state.alumnos;

// export const selectAlumnos = createSelector(
//   selectAlumnosState,
//   (state) => state.data
// );

// export const selectAlumnosLoading = createSelector(
//   selectAlumnosState,
//   (state) => state.loading
// );

// export const selectAlumnosError = createSelector(
//   selectAlumnosState,
//   (state) => state.error
// );

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AlumnosState } from './alumnosReducer';

export const selectAlumnosState = createFeatureSelector<AlumnosState>('alumnos');

export const selectAlumnos = createSelector(
  selectAlumnosState,
  (state: AlumnosState) => state.alumnos
);

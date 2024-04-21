
export type Course = 'ANGULAR' | 'REACTJS' | 'DISEÑO';

export interface AlumniData {
    id: number | any;
    name: string;
    lastName: string;
    email: string;
    course: Course;
    createdAt: Date;
}

export interface IAlumnosDialog {
    dialogHeader?: string;
    cancelButtonLabel?: string;
    confirmButtonLabel?: string;
    dataForm?: AlumniData;
}
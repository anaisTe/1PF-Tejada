
export type Course = 'ANGULAR' | 'REACTJS' | 'DISEÑO';

export interface AlumniData {
    id: number;
    name: string;
    lastName: string;
    email: string;
    course: Course;
    createdAt: Date;
}
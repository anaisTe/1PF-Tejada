export interface ILogin {
    email: string | null;
    password: string | null;
}

export interface IUser {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
}
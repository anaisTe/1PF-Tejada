import { Injectable } from '@angular/core';
import { ILogin, IUser } from '../models/login.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private DATA_USER: IUser = {
    id: 1,
    email: 'user@mail.com',
    firstName: 'Usuario',
    lastName: 'Test',
    role: 'USER',
  };

  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private router: Router) {}

  login(data: ILogin): void {
    if (data.email !== 'usuario@mail.com' || data.password !== '123456') {
      console.log('Correo o password incorrectos');
    } else {
      this._authUser$.next(this.DATA_USER);
      localStorage.setItem(
        'accessToken',
        'wiormlkamir2fno5nvdmi4om4xlpq1rcf4trtvfmbtw'
      );
      this.router.navigate(['inicio']);
    }
  }

  verifyToken(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this._authUser$.next(this.DATA_USER);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('accessToken');
  }
  
}

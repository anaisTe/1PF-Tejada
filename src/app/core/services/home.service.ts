import { Injectable } from '@angular/core';
import { ICursosHome, INotifHome } from '../../shared/models/home.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _httpClient: HttpClient
  ) {}

  getCursosHome(): Observable<ICursosHome[]> {
    return this._httpClient.get<ICursosHome[]>(environment.baseAPIURL + '/cursosHome')
  }

  getNotifHome(): Observable<INotifHome[]> {
    return this._httpClient.get<INotifHome[]>(environment.baseAPIURL + '/notifHome')
  }
}

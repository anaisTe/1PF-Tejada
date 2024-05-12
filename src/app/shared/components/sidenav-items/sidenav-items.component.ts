import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../core/services/sidenav.service';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrl: './sidenav-items.component.scss'
})
export class SidenavItemsComponent implements OnInit {

  constructor(
    private _sidenavService: SidenavService
  ){}

  ItemSidenav = this._sidenavService.getItemSidenav();

  ngOnInit(): void {
    
  }
}

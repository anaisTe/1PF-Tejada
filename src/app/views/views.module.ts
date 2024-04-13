import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SidenavService } from '../core/services/sidenav.service';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    CursosComponent,
    AlumnosComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewsRoutingModule
  ],
  exports: [
    HomeComponent,
    CursosComponent,
    AlumnosComponent,
    LayoutComponent,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    provideHttpClient(withFetch()),
    SidenavService
  ]
})
export class ViewsModule { }

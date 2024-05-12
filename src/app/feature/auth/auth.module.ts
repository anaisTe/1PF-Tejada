import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }

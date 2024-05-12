import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';


import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatRadioModule } from '@angular/material/radio';

//Components and others
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SidenavItemsComponent } from './components/sidenav-items/sidenav-items.component';
import { SidenavService } from '../core/services/sidenav.service';
import { ViewsRoutingModule } from '../feature/layout/views-routing.module';
import { FormFieldValidationErrorsPipe } from './pipes/form-validation-error.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const materialModules = [
  MatSidenavModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatPaginatorModule,

  CdkTreeModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
  MatRadioModule
];


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavItemsComponent,
    FormFieldValidationErrorsPipe
  ],
  imports: [
    ...materialModules,
    CommonModule,
    HttpClientModule,
    ViewsRoutingModule,
    SweetAlert2Module
  ],
  exports: [
    ...materialModules,
    HeaderComponent,
    FooterComponent,
    SidenavItemsComponent,
    FormFieldValidationErrorsPipe,
    SweetAlert2Module
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    provideHttpClient(withFetch()),
    SidenavService
  ]
})
export class SharedModule { }

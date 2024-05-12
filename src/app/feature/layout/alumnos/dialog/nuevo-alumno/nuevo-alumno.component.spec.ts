import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAlumnoComponent } from './nuevo-alumno.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


describe('NuevoAlumnoComponent', () => {
  let component: NuevoAlumnoComponent;
  let fixture: ComponentFixture<NuevoAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoAlumnoComponent],
      imports: [MatDialogModule, SharedModule, ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
        // Puedes proporcionar una implementación real si la necesitas en tus pruebas
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

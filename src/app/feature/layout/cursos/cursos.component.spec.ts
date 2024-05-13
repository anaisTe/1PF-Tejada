import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponent } from './cursos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CursosService } from '../../../core/services/cursos.service';


describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;
  let loginServiceSpy: jasmine.SpyObj<CursosService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosComponent],
      imports: [HttpClientTestingModule, SharedModule, ReactiveFormsModule, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    loginServiceSpy = TestBed.inject(CursosService) as jasmine.SpyObj<CursosService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cursoSelectVal method on ngOnInit', () => {
    const cursoSelectValSpy = spyOn(component, 'cursoSelectVal').and.callThrough();

    component.ngOnInit();

    expect(cursoSelectValSpy).toHaveBeenCalled();
  });

  it('should call alumnoSelectVal method on ngOnInit', () => {
    const alumnoSelectValSpy = spyOn(component, 'alumnoSelectVal').and.callThrough();

    component.ngOnInit();

    expect(alumnoSelectValSpy).toHaveBeenCalled();
  });

  it('should call getCursoList method on ngOnInit', () => {
    const getCursoListSpy = spyOn(component, 'getCursoList').and.callThrough();

    component.ngOnInit();

    expect(getCursoListSpy).toHaveBeenCalled();
  });

  it('should mark all form controls as touched if form is invalid', () => {
    spyOn(component.cursosForm, 'markAllAsTouched');

    component.saveBtn();

    expect(component.cursosForm.markAllAsTouched).toHaveBeenCalled();
  });
});

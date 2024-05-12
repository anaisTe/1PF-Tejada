import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponent } from './cursos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosComponent],
      imports: [HttpClientTestingModule, SharedModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

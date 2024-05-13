import { ComponentFixture, TestBed} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from '../../../core/services/login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('LoginService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, ReactiveFormsModule, NoopAnimationsModule],
      providers: [
        { provide: LoginService, useValue: spy }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginServiceSpy = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loginService.login if form is valid', () => {
    component.LoginForm.setValue({
      email: 'example@mail.com',
      password: 'password'
    });

    component.goToHome();

    expect(loginServiceSpy.login).toHaveBeenCalledWith({
      email: 'example@mail.com',
      password: 'password'
    });
  });

  it('should mark all form controls as touched if form is invalid', () => {
    spyOn(component.LoginForm, 'markAllAsTouched');

    component.goToHome();

    expect(component.LoginForm.markAllAsTouched).toHaveBeenCalled();
    expect(loginServiceSpy.login).not.toHaveBeenCalled();
  });
});

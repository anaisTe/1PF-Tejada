import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SidenavService } from '../../../core/services/sidenav.service';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let userServiceStub: Partial<SidenavService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{provide: SidenavService, useValue: userServiceStub}],
      imports: [MatIconModule, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should openSideNav function been called', fakeAsync(() => {
    spyOn(component, 'openSideNav');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.openSideNav).toHaveBeenCalled();
  }));
});

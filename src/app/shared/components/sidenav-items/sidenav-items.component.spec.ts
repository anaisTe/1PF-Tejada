import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavItemsComponent } from './sidenav-items.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIcon } from '@angular/material/icon';

describe('SidenavItemsComponent', () => {
  let component: SidenavItemsComponent;
  let fixture: ComponentFixture<SidenavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavItemsComponent],
      imports: [HttpClientTestingModule, MatIcon]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

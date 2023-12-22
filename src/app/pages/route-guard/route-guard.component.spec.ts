import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardComponent } from './route-guard.component';

describe('RouteGuardComponent', () => {
  let component: RouteGuardComponent;
  let fixture: ComponentFixture<RouteGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteGuardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

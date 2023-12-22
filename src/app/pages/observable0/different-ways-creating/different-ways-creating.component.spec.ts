import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentWaysCreatingComponent } from './different-ways-creating.component';

describe('DifferentWaysCreatingComponent', () => {
  let component: DifferentWaysCreatingComponent;
  let fixture: ComponentFixture<DifferentWaysCreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferentWaysCreatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferentWaysCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

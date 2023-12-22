import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngComponent } from './ang.component';

describe('AngComponent', () => {
  let component: AngComponent;
  let fixture: ComponentFixture<AngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

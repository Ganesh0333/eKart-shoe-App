import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKartHeaderComponent } from './e-kart-header.component';

describe('EKartHeaderComponent', () => {
  let component: EKartHeaderComponent;
  let fixture: ComponentFixture<EKartHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EKartHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EKartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

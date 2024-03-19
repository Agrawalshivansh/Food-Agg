import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgianComponent } from './belgian.component';

describe('BelgianComponent', () => {
  let component: BelgianComponent;
  let fixture: ComponentFixture<BelgianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelgianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelgianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

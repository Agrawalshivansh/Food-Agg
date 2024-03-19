import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe18Component } from './cafe18.component';

describe('Cafe18Component', () => {
  let component: Cafe18Component;
  let fixture: ComponentFixture<Cafe18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cafe18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

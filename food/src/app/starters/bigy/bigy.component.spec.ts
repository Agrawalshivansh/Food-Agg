import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigyComponent } from './bigy.component';

describe('BigyComponent', () => {
  let component: BigyComponent;
  let fixture: ComponentFixture<BigyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

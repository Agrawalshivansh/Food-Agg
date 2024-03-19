import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitrusComponent } from './citrus.component';

describe('CitrusComponent', () => {
  let component: CitrusComponent;
  let fixture: ComponentFixture<CitrusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitrusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitrusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

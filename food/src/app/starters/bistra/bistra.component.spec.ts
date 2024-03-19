import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BistraComponent } from './bistra.component';

describe('BistraComponent', () => {
  let component: BistraComponent;
  let fixture: ComponentFixture<BistraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BistraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BistraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

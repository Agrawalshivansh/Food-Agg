import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperfectoComponent } from './imperfecto.component';

describe('ImperfectoComponent', () => {
  let component: ImperfectoComponent;
  let fixture: ComponentFixture<ImperfectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImperfectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImperfectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

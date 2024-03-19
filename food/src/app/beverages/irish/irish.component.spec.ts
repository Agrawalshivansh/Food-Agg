import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrishComponent } from './irish.component';

describe('IrishComponent', () => {
  let component: IrishComponent;
  let fixture: ComponentFixture<IrishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

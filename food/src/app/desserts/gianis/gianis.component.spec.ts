import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GianisComponent } from './gianis.component';

describe('GianisComponent', () => {
  let component: GianisComponent;
  let fixture: ComponentFixture<GianisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GianisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GianisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

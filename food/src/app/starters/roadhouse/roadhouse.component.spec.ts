import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadhouseComponent } from './roadhouse.component';

describe('RoadhouseComponent', () => {
  let component: RoadhouseComponent;
  let fixture: ComponentFixture<RoadhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadhouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

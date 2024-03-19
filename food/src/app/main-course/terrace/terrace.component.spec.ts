import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraceComponent } from './terrace.component';

describe('TerraceComponent', () => {
  let component: TerraceComponent;
  let fixture: ComponentFixture<TerraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerraceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

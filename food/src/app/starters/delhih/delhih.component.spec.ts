import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhihComponent } from './delhih.component';

describe('DelhihComponent', () => {
  let component: DelhihComponent;
  let fixture: ComponentFixture<DelhihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhihComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelhihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KevenComponent } from './keven.component';

describe('KevenComponent', () => {
  let component: KevenComponent;
  let fixture: ComponentFixture<KevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

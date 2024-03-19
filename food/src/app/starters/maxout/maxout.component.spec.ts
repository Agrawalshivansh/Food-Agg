import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxoutComponent } from './maxout.component';

describe('MaxoutComponent', () => {
  let component: MaxoutComponent;
  let fixture: ComponentFixture<MaxoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

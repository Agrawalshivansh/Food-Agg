import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokefComponent } from './smokef.component';

describe('SmokefComponent', () => {
  let component: SmokefComponent;
  let fixture: ComponentFixture<SmokefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmokefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

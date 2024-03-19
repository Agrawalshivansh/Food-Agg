import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaldComponent } from './donald.component';

describe('DonaldComponent', () => {
  let component: DonaldComponent;
  let fixture: ComponentFixture<DonaldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonaldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

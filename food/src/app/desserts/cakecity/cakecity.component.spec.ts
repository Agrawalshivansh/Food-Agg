import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakecityComponent } from './cakecity.component';

describe('CakecityComponent', () => {
  let component: CakecityComponent;
  let fixture: ComponentFixture<CakecityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakecityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

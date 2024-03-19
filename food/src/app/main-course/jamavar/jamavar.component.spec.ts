import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamavarComponent } from './jamavar.component';

describe('JamavarComponent', () => {
  let component: JamavarComponent;
  let fixture: ComponentFixture<JamavarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamavarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JamavarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

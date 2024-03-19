import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsaffronComponent } from './ssaffron.component';

describe('SsaffronComponent', () => {
  let component: SsaffronComponent;
  let fixture: ComponentFixture<SsaffronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsaffronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsaffronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

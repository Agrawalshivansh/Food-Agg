import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaskinComponent } from './baskin.component';

describe('BaskinComponent', () => {
  let component: BaskinComponent;
  let fixture: ComponentFixture<BaskinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaskinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaskinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

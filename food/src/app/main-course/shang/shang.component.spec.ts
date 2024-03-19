import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShangComponent } from './shang.component';

describe('ShangComponent', () => {
  let component: ShangComponent;
  let fixture: ComponentFixture<ShangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

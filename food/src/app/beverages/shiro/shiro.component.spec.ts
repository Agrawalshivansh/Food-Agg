import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiroComponent } from './shiro.component';

describe('ShiroComponent', () => {
  let component: ShiroComponent;
  let fixture: ComponentFixture<ShiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

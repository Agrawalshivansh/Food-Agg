import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YauatchaComponent } from './yauatcha.component';

describe('YauatchaComponent', () => {
  let component: YauatchaComponent;
  let fixture: ComponentFixture<YauatchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YauatchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YauatchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

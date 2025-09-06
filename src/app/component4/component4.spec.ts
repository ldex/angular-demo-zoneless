import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component4 } from './component4';

describe('Component4', () => {
  let component: Component4;
  let fixture: ComponentFixture<Component4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

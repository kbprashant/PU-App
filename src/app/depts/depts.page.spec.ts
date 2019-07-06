import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptsPage } from './depts.page';

describe('DeptsPage', () => {
  let component: DeptsPage;
  let fixture: ComponentFixture<DeptsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

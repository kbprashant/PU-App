import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BustimePage } from './bustime.page';

describe('BustimePage', () => {
  let component: BustimePage;
  let fixture: ComponentFixture<BustimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BustimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News3Page } from './news3.page';

describe('News3Page', () => {
  let component: News3Page;
  let fixture: ComponentFixture<News3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News1Page } from './news1.page';

describe('News1Page', () => {
  let component: News1Page;
  let fixture: ComponentFixture<News1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

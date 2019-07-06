import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewforumqueryPage } from './newforumquery.page';

describe('NewforumqueryPage', () => {
  let component: NewforumqueryPage;
  let fixture: ComponentFixture<NewforumqueryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewforumqueryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewforumqueryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

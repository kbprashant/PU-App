import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmainPage } from './mapmain.page';

describe('MapmainPage', () => {
  let component: MapmainPage;
  let fixture: ComponentFixture<MapmainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

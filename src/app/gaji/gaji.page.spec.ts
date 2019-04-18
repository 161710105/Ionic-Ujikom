import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GajiPage } from './gaji.page';

describe('GajiPage', () => {
  let component: GajiPage;
  let fixture: ComponentFixture<GajiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GajiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GajiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

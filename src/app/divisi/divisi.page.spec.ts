import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisiPage } from './divisi.page';

describe('DivisiPage', () => {
  let component: DivisiPage;
  let fixture: ComponentFixture<DivisiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

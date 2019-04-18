import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartemenPage } from './departemen.page';

describe('DepartemenPage', () => {
  let component: DepartemenPage;
  let fixture: ComponentFixture<DepartemenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartemenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartemenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JabatanPage } from './jabatan.page';

describe('JabatanPage', () => {
  let component: JabatanPage;
  let fixture: ComponentFixture<JabatanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JabatanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JabatanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

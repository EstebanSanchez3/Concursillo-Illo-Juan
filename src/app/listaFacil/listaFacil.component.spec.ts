import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  ListaFacilComponent } from './listaFacil.component';

describe('ListaFacilComponent', () => {
  let component: ListaFacilComponent;
  let fixture: ComponentFixture<ListaFacilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFacilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

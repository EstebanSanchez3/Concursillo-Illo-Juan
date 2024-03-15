import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadificilComponent } from './listadificil.component';

describe('ListadificilComponent', () => {
  let component: ListadificilComponent;
  let fixture: ComponentFixture<ListadificilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadificilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadificilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

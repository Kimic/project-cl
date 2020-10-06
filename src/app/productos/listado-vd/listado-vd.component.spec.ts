import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVdComponent } from './listado-vd.component';

describe('ListadoVdComponent', () => {
  let component: ListadoVdComponent;
  let fixture: ComponentFixture<ListadoVdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoVdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

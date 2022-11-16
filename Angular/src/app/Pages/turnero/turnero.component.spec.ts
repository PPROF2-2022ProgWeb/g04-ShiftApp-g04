/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TurneroComponent } from './turnero.component';

describe('TurneroComponent', () => {
  let component: TurneroComponent;
  let fixture: ComponentFixture<TurneroComponent>;

  // POPUP Solicitar turno
let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');
// Fin del POPUP Solicitar turno

// POPUP Mis turnos
let btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
overlay2 = document.getElementById('overlay2'),
popup2 = document.getElementById('popup2'),
btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');
// Fin del POPUP Mis turnos

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



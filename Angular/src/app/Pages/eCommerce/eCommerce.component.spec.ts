/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ECommerceComponent } from './eCommerce.component';

describe('ECommerceComponent', () => {
  let component: ECommerceComponent;
  let fixture: ComponentFixture<ECommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCashflowComponent } from './create-cashflow.component';

describe('CreateCashflowComponent', () => {
  let component: CreateCashflowComponent;
  let fixture: ComponentFixture<CreateCashflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCashflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCashflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

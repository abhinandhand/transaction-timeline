import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAmountComponent } from './transaction-amount.component';

xdescribe('TransactionAmountComponent', () => {
  let component: TransactionAmountComponent;
  let fixture: ComponentFixture<TransactionAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionAmountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

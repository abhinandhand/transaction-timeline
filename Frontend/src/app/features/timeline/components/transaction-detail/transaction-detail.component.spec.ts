import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailComponent } from './transaction-detail.component';

describe('TransactionDetailComponent', () => {
  let component: TransactionDetailComponent;
  let fixture: ComponentFixture<TransactionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

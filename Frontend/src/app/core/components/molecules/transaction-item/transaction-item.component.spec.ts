import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionItemComponent } from './transaction-item.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '@features/timeline/model/timeline.model';
import { mockTransaction } from 'test/mocks/timeline.mock';

const mockActivatedRoute = {
  snapshot: { paramMap: new Map(), queryParamMap: new Map() },
};

describe('TransactionItemComponent', () => {
  let component: TransactionItemComponent;
  let fixture: ComponentFixture<TransactionItemComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  const mockTransaction: Transaction = {
    transactionDetailId: '123',
    amountInBaseCurrency: 100,
  } as Transaction;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [CommonModule, TransactionItemComponent],
      providers: [
        CurrencyPipe,
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionItemComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('data', mockTransaction);

    fixture.detectChanges();
  });
});

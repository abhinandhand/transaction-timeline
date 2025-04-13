import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionItemComponent } from './transaction-item.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Transaction } from '@features/timeline/model/timeline.model';

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
      providers: [CurrencyPipe, { provide: Router, useValue: mockRouter }],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionItemComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('data', mockTransaction);

    fixture.detectChanges();
  });

  describe('onKeyDown', () => {
    it('should navigate and prevent default on Enter key press', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      component.onKeyDown(event);

      expect(mockRouter.navigate).toHaveBeenCalledWith([
        '/timeline/detail',
        '123',
      ]);
      expect(event.defaultPrevented).toBeTrue();
    });

    it('should navigate and prevent default on Space key press', () => {
      const event = new KeyboardEvent('keydown', { key: ' ' });
      component.onKeyDown(event);

      expect(mockRouter.navigate).toHaveBeenCalledWith([
        '/timeline/detail',
        '123',
      ]);
      expect(event.defaultPrevented).toBeTrue();
    });

    it('should not navigate or prevent default on other key press', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      component.onKeyDown(event);

      expect(mockRouter.navigate).not.toHaveBeenCalled();
      expect(event.defaultPrevented).toBeFalse();
    });
  });
});

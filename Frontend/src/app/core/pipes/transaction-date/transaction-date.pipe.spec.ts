import { TransactionDatePipe } from './transaction-date.pipe';

describe('TransactionDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionDatePipe();
    expect(pipe).toBeTruthy();
  });
});

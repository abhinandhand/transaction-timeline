import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailNotFoundComponent } from './transaction-detail-not-found.component';

describe('TransactionDetailNotFoundComponent', () => {
  let component: TransactionDetailNotFoundComponent;
  let fixture: ComponentFixture<TransactionDetailNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDetailNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

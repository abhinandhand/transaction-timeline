import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDayListComponent } from './transaction-day-list.component';

describe('TransactionDayListComponent', () => {
  let component: TransactionDayListComponent;
  let fixture: ComponentFixture<TransactionDayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDayListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

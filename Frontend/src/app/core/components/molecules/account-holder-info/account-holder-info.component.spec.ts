import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHolderInfoComponent } from './account-holder-info.component';

describe('AccountHolderInfoComponent', () => {
  let component: AccountHolderInfoComponent;
  let fixture: ComponentFixture<AccountHolderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountHolderInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountHolderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

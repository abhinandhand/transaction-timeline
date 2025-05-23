import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyComponent } from './money.component';

xdescribe('MoneyComponent', () => {
  let component: MoneyComponent;
  let fixture: ComponentFixture<MoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

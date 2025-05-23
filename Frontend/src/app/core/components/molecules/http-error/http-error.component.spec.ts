import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorComponent } from './http-error.component';

xdescribe('HttpErrorComponent', () => {
  let component: HttpErrorComponent;
  let fixture: ComponentFixture<HttpErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

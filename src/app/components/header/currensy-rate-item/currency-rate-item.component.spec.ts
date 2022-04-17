import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateItemComponent } from './currency-rate-item.component';

describe('CurrensyRateItemComponent', () => {
  let component: CurrencyRateItemComponent;
  let fixture: ComponentFixture<CurrencyRateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyRateItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

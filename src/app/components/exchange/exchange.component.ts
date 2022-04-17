import { Component, OnInit } from '@angular/core';
import { baseCurrency, currencyRates } from '../../utils/availableCurrencies';
import { ReteService } from '../../services/rete.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  firstAmount: number;
  firstCurrency: string;
  secondAmount: number;
  secondCurrency: string;
  currentInput: 'first' | 'second' = 'first';

  availableCurrencies: string[] = [baseCurrency, ...currencyRates];

  constructor(private rateService: ReteService) {}

  ngOnInit(): void {}

  onCurrencyCanage() {
    switch (this.currentInput) {
      case 'first':
        this.onFirstChange();
        break;
      case 'second':
        this.onSecondChange();
        break;
    }
  }

  onFirstChange() {
    this.currentInput = 'first';

    if (!this.firstAmount || !this.firstCurrency || !this.secondCurrency) {
      return;
    }
    this.rateService
      .convertCurrencies(
        this.firstCurrency,
        this.firstAmount,
        this.secondCurrency
      )
      .subscribe((r) => {
        this.secondAmount = +r.result.toFixed(4);
      });
  }

  onSecondChange() {
    this.currentInput = 'second';

    if (!this.secondAmount || !this.secondCurrency || !this.firstCurrency) {
      return;
    }
    this.rateService
      .convertCurrencies(
        this.secondCurrency,
        this.secondAmount,
        this.firstCurrency
      )
      .subscribe((r) => {
        this.firstAmount = +r.result.toFixed(4);
      });
  }
}

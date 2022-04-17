import { Component, OnInit } from '@angular/core';
import { ReteService } from '../../../services/rete.service';
import { Rates } from '../../../utils/types';
import {
  baseCurrency,
  currencyRates,
} from '../../../utils/availableCurrencies';

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.css'],
})
export class CurrencyRatesComponent implements OnInit {
  public baseCurrency = baseCurrency;
  private currencyRates = currencyRates;
  rates: Rates = [];

  constructor(private rateService: ReteService) {}

  ngOnInit(): void {
    this.rateService
      .getBaseRates(this.baseCurrency, this.currencyRates)
      .subscribe((response) => {
        const rates = response.rates;

        for (const rate in rates) {
          this.rates.push({
            code: rate,
            value: rates[rate],
          });
        }
      });
  }
}

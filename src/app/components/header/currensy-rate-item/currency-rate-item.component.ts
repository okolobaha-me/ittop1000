import { Component, OnInit, Input } from '@angular/core';
import { IRate } from '../../../utils/types';

@Component({
  selector: 'app-currency-rate-item',
  templateUrl: './currency-rate-item.component.html',
  styleUrls: ['./currency-rate-item.component.css'],
})
export class CurrencyRateItemComponent implements OnInit {
  @Input() rate: IRate;
  @Input() baseCurrency: string;

  constructor() {}

  ngOnInit(): void {}
}

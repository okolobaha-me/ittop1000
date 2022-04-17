import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConvertResponse, ILatestResponse } from '../utils/types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReteService {
  private apiUrl = `https://api.exchangerate.host/`;

  constructor(private http: HttpClient) {}

  getBaseRates(
    base: string,
    currencies: string[]
  ): Observable<ILatestResponse> {
    const url = `${this.apiUrl}latest?&base=${base}&symbols=${currencies.join(
      ','
    )}`;

    return this.http.get<ILatestResponse>(url);
  }

  convertCurrencies(
    fromCurrency: string,
    fromAmount: number,
    toCurrency: string
  ): Observable<IConvertResponse> {
    const url = `${this.apiUrl}convert?from=${fromCurrency}&to=${toCurrency}&amount=${fromAmount}`;
    return this.http.get<IConvertResponse>(url);
  }
}

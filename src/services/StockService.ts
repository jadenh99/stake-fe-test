import { Observable, map, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

export type Stock = {
  id: string;
  symbol: string;
  fullName: string;
  logo: string;
  volume: number;
  marketCap: number;
  type: string;
};

export type PricingDetails = {
  id: string;
  symbol: string;
  open: number;
  close: number;
  ask: number;
  high: number;
  low: number;
};

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private detailsUrl = 'assets/data/details.json';
  private pricingUrl = 'assets/data/pricing.json';

  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.detailsUrl);
  }

  getStockById(id: string): Observable<Stock> {
    return this.http.get<Stock[]>(this.detailsUrl).pipe(
      map((stocks) => stocks.find((stock) => stock.id === id)!),
      catchError((err) => {
        console.error('Error fetching stocks:', err);
        return throwError(() => new Error('Failed to fetch stocks'));
      })
    );
  }

  getPricingDetailBySymbol(symbol: string): Observable<PricingDetails> {
    return this.http.get<PricingDetails[]>(this.pricingUrl).pipe(
      map(
        (pricingDetails) =>
          pricingDetails.find((detail) => detail.symbol === symbol)!
      ),
      catchError((err) => {
        console.error('Error fetching pricing detail:', err);
        return throwError(() => new Error('Failed to fetch pricing detail'));
      })
    );
  }
}

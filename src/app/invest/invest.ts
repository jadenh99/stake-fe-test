import { PricingDetails, Stock, StockService } from 'src/services/StockService';
import { Profile, ProfileService } from 'src/services/ProfileService';

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'invest.html',
  styleUrls: ['invest.scss'],
  standalone: false,
  providers: [StockService, ProfileService],
})
export class InvestPage {
  pageTitle = 'Dashboard';
  equity = '$8,036';
  stocks: Stock[] = [];
  holdings: { symbol: string; shares: number }[] = [];
  ownedStocks: (PricingDetails & { shares: number })[] = [];
  loadingStocks = true;
  constructor(
    private stockService: StockService,
    private profileService: ProfileService
  ) {}

  // Get stocks & user's holding information. Timeout used to mimic an async request
  ngOnInit() {
    this.stockService.getStocks().subscribe((stocks) => {
      this.stocks = stocks || [];
    });
    this.profileService.getHoldings().subscribe((holdings) => {
      this.holdings = holdings;
    });
    setTimeout(() => {
      this.loadingStocks = false;
    }, 3000);
  }
}

import { Component, Input } from '@angular/core';
import { PricingDetails, StockService } from 'src/services/StockService';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.html',
  imports: [IonicModule, CommonModule],
  providers: [StockService],
  styleUrls: ['./instrument.scss'],
  standalone: true,
})
export class InstrumentComponent {
  @Input() holding: { symbol: string; shares: number } | null = null;
  stock: PricingDetails | null = null;
  percentageChange: number = 0;
  holdingValue: number = 0;

  constructor(private stockService: StockService) {}

  shareMapping = {
    '=1': '# share',
    other: '# shares',
  };

  calculatePercentageChange(): void {
    this.percentageChange = this.stock
      ? ((this.stock.close - this.stock.open) / this.stock.open) * 100
      : 0;
  }

  calculateHoldingValue(): void {
    this.holdingValue =
      this.stock && this.holding ? this.stock.ask * this.holding.shares : 0;
  }

  // Get stock through symbol passed from parent
  // Calculate % change && user's holding value
  ngOnInit() {
    this.stockService.getPricingDetailBySymbol(this.holding!.symbol).subscribe({
      next: (stock) => {
        this.stock = stock;
        this.calculatePercentageChange();
        this.calculateHoldingValue();
      },
      error: (err) => console.error(err),
    });
  }
}

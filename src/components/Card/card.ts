import { Component, Input } from '@angular/core';
import { PricingDetails, Stock, StockService } from 'src/services/StockService';

import { AbbreviateNumberPipe } from 'src/pipes/AbbreviateNumberPipe';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TypeComponent } from '../Type/type';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  imports: [IonicModule, CommonModule, TypeComponent, AbbreviateNumberPipe],
  providers: [StockService],
  styleUrls: ['./card.scss'],
  standalone: true,
})
export class CardComponent {
  @Input() size: 'lg' | 'md' | 'sm' = 'lg';
  @Input() stock: Stock | null = null;
  pricingDetail: PricingDetails | null = null;

  constructor(private stockService: StockService) {}

  // Get pricing details
  ngOnInit() {
    if (this.stock) {
      this.stockService
        .getPricingDetailBySymbol(this.stock?.symbol)
        .subscribe((detail) => (this.pricingDetail = detail));
    }
  }
}

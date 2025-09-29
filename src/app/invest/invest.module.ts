import { CardComponent } from 'src/components/Card/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InstrumentComponent } from 'src/components/Instrument/instrument';
import { InvestPage } from './invest';
import { InvestPageRoutingModule } from './invest-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { StockService } from 'src/services/StockService';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InvestPageRoutingModule,
    InstrumentComponent,
    CardComponent,
    HttpClientModule,
  ],
  declarations: [InvestPage],
})
export class InvestModule {}

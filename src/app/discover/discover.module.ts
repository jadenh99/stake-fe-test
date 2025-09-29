import { CommonModule } from '@angular/common';
import { DiscoverRoutingModule } from './discover-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Tab2Page } from './discover';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, DiscoverRoutingModule],
  declarations: [Tab2Page],
})
export class DiscoverModule {}

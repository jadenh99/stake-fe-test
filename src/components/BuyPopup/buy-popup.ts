import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-buy-popup',
  templateUrl: './buy-popup.html',
  imports: [IonicModule, CommonModule],

  styleUrls: ['./buy-popup.scss'],
  standalone: true,
})
export class BuyPopupComponent {}

import { Component, Input } from '@angular/core';

import { CapitalisePipe } from 'src/pipes/CapitalisePipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type',
  templateUrl: './type.html',
  styleUrls: ['./type.scss'],
  standalone: true,
  imports: [CommonModule, CapitalisePipe],
})
export class TypeComponent {
  @Input() type!: string;
}

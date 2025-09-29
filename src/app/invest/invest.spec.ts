import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestPage } from './invest';
import { IonicModule } from '@ionic/angular';

describe('InvestPage', () => {
  let component: InvestPage;
  let fixture: ComponentFixture<InvestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

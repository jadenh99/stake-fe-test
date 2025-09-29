import { RouterModule, Routes } from '@angular/router';

import { InvestPage } from './invest';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: InvestPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestPageRoutingModule {}

import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { Tab2Page } from './discover';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverRoutingModule {}

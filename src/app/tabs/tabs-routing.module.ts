import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'invest',
        loadChildren: () =>
          import('../invest/invest.module').then((m) => m.InvestModule),
      },
      {
        path: 'discover',
        loadChildren: () =>
          import('../discover/discover.module').then((m) => m.DiscoverModule),
      },
      {
        path: '',
        redirectTo: '/tabs/invest',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/invest',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

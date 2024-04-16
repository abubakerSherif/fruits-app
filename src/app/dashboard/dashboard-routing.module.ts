import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'fruits', pathMatch: 'full' },
      {
        path: 'fruits',
        loadChildren: () => import('./fruit/fruit.module').then((m) => m.FruitModule),
        title: 'Fruits',
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}

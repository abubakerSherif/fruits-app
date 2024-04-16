import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitComponent } from './fruit.component';

const routes: Routes = [
  { path: '', component: FruitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitRoutingModule {
}

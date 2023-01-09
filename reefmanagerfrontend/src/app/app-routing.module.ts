import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './View/home/home.component';
import { CoralsComponent } from './View/corals/corals.component';
import { InvertebratesComponent } from './View/invertebrates/invertebrates.component';
import { FishsComponent } from './View/fishs/fishs.component';
import { CoralCreateComponent } from './View/corals/coral-create/coral-create.component';
import { CoralEditComponent } from './View/corals/coral-edit/coral-edit.component';
import { CoralDeleteComponent } from './View/corals/coral-delete/coral-delete.component';
import { FishCreateComponent } from './View/fishs/fish-create/fish-create.component';
import { FishEditComponent } from './View/fishs/fish-edit/fish-edit.component';
import { FishDeleteComponent } from './View/fishs/fish-delete/fish-delete.component';
import { InvertebratesCreateComponent } from './View/invertebrates/invertebrates-create/invertebrates-create.component';
import { InvertebratesEditComponent } from './View/invertebrates/invertebrates-edit/invertebrates-edit.component';
import { InvertebratesDeleteComponent } from './View/invertebrates/invertebrates-delete/invertebrates-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "corals",
    component: CoralsComponent
  },
  {
    path: 'fishs',
    component: FishsComponent
  },
  {
    path: "invertebrates",
    component: InvertebratesComponent
  },
  {
    path: "corals/create",
    component: CoralCreateComponent
  },
  {
    path: "corals/edit/:id",
    component: CoralEditComponent
  },
  {
    path: "corals/delete/:id",
    component: CoralDeleteComponent
  },
  {
    path: "fish/create",
    component: FishCreateComponent
  },
  {
    path: "fish/edit/:id",
    component: FishEditComponent
  },
  {
    path: "fish/delete/:id",
    component: FishDeleteComponent
  },
  {
    path: "invertebrates/create",
    component: InvertebratesCreateComponent
  },
  {
    path: "invertebrates/edit/:id",
    component: InvertebratesEditComponent
  },
  {
    path: "invertebrates/delete/:id",
    component: InvertebratesDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

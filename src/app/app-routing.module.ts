import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclienteComponent } from './features/addcliente/addcliente.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path:'Home',
    component: HomeComponent
  },
  {
    path:'AddCliente',
    component: AddclienteComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

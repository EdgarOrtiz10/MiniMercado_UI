import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclienteComponent } from './features/addcliente/addcliente.component';
import { BuscarComponent } from './features/buscar/buscar.component';
import { ClientesComponent } from './features/clientes/clientes.component';
import { HomeComponent } from './features/home/home.component';
import { ProductosvendidosComponent } from './features/productosvendidos/productosvendidos.component';
import { ProveedoresComponent } from './features/proveedores/proveedores.component';
import { StockComponent } from './features/stock/stock.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'stock',
    component: StockComponent
  },
  {
    path:'buscar',
    component: BuscarComponent
  },
  {
    path:'addCliente',
    component: AddclienteComponent
  },
  {
    path:'productosVendidos',
    component: ProductosvendidosComponent
  },
  {
    path:'clientes',
    component: ClientesComponent
  },
  {
    path:'proveedores',
    component: ProveedoresComponent
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

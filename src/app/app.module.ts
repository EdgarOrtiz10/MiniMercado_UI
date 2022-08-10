import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { StockComponent } from './features/stock/stock.component';
import { AddclienteComponent } from './features/addcliente/addcliente.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscarComponent } from './features/buscar/buscar.component';
import { ProductosvendidosComponent } from './features/productosvendidos/productosvendidos.component';
import { ClientesComponent } from './features/clientes/clientes.component';
import { ProveedoresComponent } from './features/proveedores/proveedores.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StockComponent,
    AddclienteComponent,
    BuscarComponent,
    ProductosvendidosComponent,
    ClientesComponent,
    ProveedoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

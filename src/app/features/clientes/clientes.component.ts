import { Component, OnInit } from '@angular/core';
import { Clientes } from './models/clientes';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes:Clientes[] = []

  constructor(private clienteService:ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }
  getClientes() {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
/*
  onSubmit(cliente: Clientes): void{
    console.log(cliente);
    //Consumir el API de creacion
    this.clienteService.createClientes(cliente).subscribe(data=>{

      this.getClientes();

    });
  }
*/
}

import { Component, OnInit } from '@angular/core';
import { Addcliente } from './models/addcliente';
import { map, Observable } from 'rxjs';
import { AddclienteService } from './services/addcliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.component.html',
  styleUrls: ['./addcliente.component.css']
})
export class AddclienteComponent implements OnInit {
  addcliente:Addcliente[] = []

  constructor(private addClienteService:AddclienteService) { }

  ngOnInit(): void {
    this.getAddCliente();
  }
  getAddCliente() {
    this.addClienteService.getAddCliente().subscribe(data => {
      this.addcliente = data;
    });

  }

  onSubmit(addcliente: Addcliente): void{
    console.log(addcliente);
    //Consumir el API de creacion
    this.addClienteService.createAddCliente(addcliente).subscribe(data=>{

      this.getAddCliente();
      console.log(data);
    });
  }
}

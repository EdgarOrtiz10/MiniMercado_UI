import { Component, OnInit } from '@angular/core';
import { Proveedores } from './models/proveedores';
import { ProveedoresService } from './services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedores:Proveedores[] = []

  constructor(private proveedoresService:ProveedoresService) { }

  ngOnInit(): void {
    this.getProveedores();
  }
  getProveedores() {
    this.proveedoresService.getProveedores().subscribe(data => {
      this.proveedores = data;
    });
  }
}

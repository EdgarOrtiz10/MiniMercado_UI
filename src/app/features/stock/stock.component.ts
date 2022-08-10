import { Component, OnInit } from '@angular/core';
import { Productos } from './models/productos';
import { StockService } from './services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stock:Stock[] = []

  constructor(private stockService:StockService) { }

  ngOnInit(): void {
    this.getStock();
  }
  getStock() {
    this.stockService.getStock().subscribe(data => {
      this.stock = data;
    });
  }

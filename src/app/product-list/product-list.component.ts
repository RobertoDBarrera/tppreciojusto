import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ProvinciaSelectComponent } from '../provincia-select/provincia-select.component';
import { ActivatedRoute } from '@angular/router';

export interface Producto {
  ean:number;
  nombre:string;
  precio:number;
}



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit  {

  productos: Producto[] = [];
  provinciaSlctd:string =this.route.snapshot.params['id'];
  
  
  
  constructor(private productoSrv:ProductoService,private route:ActivatedRoute) {
    productoSrv.getProductos(this.provinciaSlctd).subscribe((data:any) => {
    this.productos = data;
    });
  } 
  
  ngOnInit(): void {
    
  }
  
}

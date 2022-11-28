import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ProvinciasService } from '../service/provincias.service';

export interface Provincia {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-provincia-select',
  templateUrl: './provincia-select.component.html',
  styleUrls: ['./provincia-select.component.css'],
})


export class ProvinciaSelectComponent {
  constructor(private ProvinciaService: ProvinciasService) {
    this.ProvinciaService.getProvincias().subscribe((data: any) => {
      console.log(data);
      this.provincia = data;
    });
  }
  provincia: Provincia[] = [];

  provinciaSeleccionada: Provincia = {
    nombre: '',
    id: 0,
  };
  
  
  ngOnInit():void{}

}

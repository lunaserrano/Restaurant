import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { MesasInterface } from 'src/app/demo/api/ordenes/mesasInterface';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, TabViewModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements OnInit {
 

  ngOnInit(){
    
  }
  listMesas: MesasInterface[] = [
    {
      cod_mesas: 1,
      nombre: 'Mesa 1',
      estado: 'Ocupada',
      acientos: 4,
      ubicacion: 'Interior'
    },
    {
      cod_mesas: 2,
      nombre: 'Mesa 2',
      estado: 'Disponible',
      acientos: 4,
      ubicacion: 'Interior'
    },
    {
      cod_mesas: 3,
      nombre: 'Mesa 3',
      estado: 'Ocupada',
      acientos: 4,
      ubicacion: 'Exterior'
    },
    {
      cod_mesas: 4,
      nombre: 'Mesa 4',
      estado: 'Disponible',
      acientos: 4,
      ubicacion: 'Exterior'
    },
    {
      cod_mesas: 5,
      nombre: 'Mesa 5',
      estado: 'Ocupada',
      acientos: 4,
      ubicacion: 'Interior'
    },
    {
      cod_mesas: 6,
      nombre: 'Mesa 6',
      estado: 'Disponible',
      acientos: 4,
      ubicacion: 'Interior'
    },
    {
      cod_mesas: 7,
      nombre: 'Mesa 7',
      estado: 'Ocupada',
      acientos: 4, 
      ubicacion: 'Exterior'
    },
    {
      cod_mesas: 8,
      nombre: 'Mesa 8',
      estado: 'Disponible',
      acientos: 4,
      ubicacion: 'Exterior'
    },
    {
      cod_mesas: 9,
      nombre: 'Mesa 9',
      estado: 'Ocupada',
      acientos: 4,
      ubicacion: 'Interior'
    },
    {
      cod_mesas: 10,
      nombre: 'Mesa 10',
      estado: 'Disponible',
      acientos: 4,
      ubicacion: 'Interior'
    }
  ];

}

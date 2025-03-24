// Objectivo: Crear un componente para gestionar las áreas y mesas de un restaurante.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  standalone: false,
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements OnInit {
 // Modal control
 areaDialogVisible: boolean = false;
 mesaDialogVisible: boolean = false;

   // Formularios
   areaForm!: FormGroup;
   mesaForm!: FormGroup;

   areaIndexSeleccionada: number = -1;

   constructor(private fb: FormBuilder) {
    this.initForms();
  }

  initForms() {
    this.areaForm = this.fb.group({
      nombre: ['', Validators.required]
    });

    this.mesaForm = this.fb.group({
      acientos: [1, [Validators.required, Validators.min(1)]],
      estado: [null, Validators.required],
      ubicacion: ['', Validators.required]
    });
  }

    // Estados disponibles para la mesa
  estados = [
    { label: 'Disponible', value: 'Disponible' },
    { label: 'Ocupada', value: 'Ocupada' }
  ];
 
  ngOnInit(){
  
  }
  
  listAreas = [
    {
      cod_area: 1,
      nombre: 'Mesas',
      mesas: [
        {cod_mesa: 1, acientos: 4, estado: 'Disponible', ubicacion: 'A1' },
        {cod_mesa: 2, acientos: 2, estado: 'Ocupada', ubicacion: 'A2' }
      ]
    },
    {
      cod_area: 2,
      nombre: 'Terraza',
      mesas: [
        { acientos: 6, estado: 'Disponible', ubicacion: 'B1' }
      ]
    }
  ];

  openAreaDialog() {
    this.areaForm.reset();
    this.areaDialogVisible = true;
  }

  // 🔹 Guardar el área creada
  guardarArea() {
    const nuevaArea = {
      cod_area: this.listAreas.length + 1,
      nombre: this.areaForm.value.nombre,
      mesas: []
    };

    this.listAreas.push(nuevaArea);
    this.areaDialogVisible = false;
  }

  // 🔹 Abrir el dialog para agregar mesa
  openMesaDialog(areaIndex: number) {
    this.areaIndexSeleccionada = areaIndex;
    this.mesaForm.reset({
      acientos: 0,
      estado: null,
      ubicacion: ''
    });
    this.mesaDialogVisible = true;
  }

  // 🔹 Guardar la mesa creada en el área seleccionada
  guardarMesa() {
    const nuevaMesa = {
      cod_mesa: this.listAreas[this.areaIndexSeleccionada].mesas.length + 1,
      acientos: this.mesaForm.value.acientos,
      estado: this.mesaForm.value.estado,
      ubicacion: this.mesaForm.value.ubicacion
    };

    this.listAreas[this.areaIndexSeleccionada].mesas.push(nuevaMesa);
    this.mesaDialogVisible = false;
  }
}

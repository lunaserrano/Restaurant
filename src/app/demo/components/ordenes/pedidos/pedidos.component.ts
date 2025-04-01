// Objectivo: Crear un componente para gestionar las áreas y mesas de un restaurante.
import { Component, HostListener, OnInit } from '@angular/core';
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
 pedidoDialogVisible: boolean = false;
 sidebarCategoriasVisible: boolean = false;

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
 
  esMovil: boolean = false;
mostrarDetalle: boolean = false;

@HostListener('window:resize', [])
onResize() {
  this.esMovil = window.innerWidth < 1200;
}
  ngOnInit(){
    this.onResize();
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

  ordenDialogVisible: boolean = false;
  mesaSeleccionada: { area: string, mesa: string } | null = null;
  
  categorias = [
    { nombre: 'Platos Fuertes', codigo: 'platos' },
    { nombre: 'Bebidas', codigo: 'bebidas' },
    { nombre: 'Postres', codigo: 'postres' }
  ];
  
  productosCatalogo = {
    platos: [
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },

      { nombre: 'Lomo Saltado', descripcion: 'Carne con papas', precio: 25 },
      { nombre: 'Arroz con Pollo', descripcion: 'Típico peruano', precio: 20 }
    ],
    bebidas: [
      { nombre: 'Coca Cola', descripcion: 'Botella 500ml', precio: 5 },
      { nombre: 'Jugo Natural', descripcion: 'Naranja o piña', precio: 7 }
    ],
    postres: [
      { nombre: 'Torta de Chocolate', descripcion: 'Rebanada', precio: 10 },
      { nombre: 'Helado', descripcion: '2 bolas', precio: 8 }
    ]
  };
  
  categoriaSeleccionada: any = null;
  productosFiltrados: any[] = [];
  ordenActual: any[] = [];
  
  // Abre el modal de orden
  abrirOrden(area: string, mesa: string) {
    this.mesaSeleccionada = { area, mesa };
    this.ordenActual = [];
    this.categoriaSeleccionada = this.categorias[0];
    this.cargarProductos();
    this.ordenDialogVisible = true;
  }
  
  // Carga productos según la categoría seleccionada
  cargarProductos() {
    const codigo = this.categoriaSeleccionada?.codigo;
    this.productosFiltrados = this.productosCatalogo[codigo] || [];
  }
  
  // Agrega productos a la orden
  agregarProducto(producto: any) {
    const index = this.ordenActual.findIndex(p => p.nombre === producto.nombre);
    if (index !== -1) {
      this.ordenActual[index].cantidad += 1;
    } else {
      this.ordenActual.push({ ...producto, cantidad: 1 });
    }
  }
  
  calcularTotal(): number {
    return this.ordenActual.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  }
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

  aumentarCantidad(item: any) {
    const index = this.ordenActual.findIndex(p => p.nombre === item.nombre);
    if (index !== -1) {
      this.ordenActual[index].cantidad += 1;
    }
  }
  
  disminuirCantidad(item: any) {
    const index = this.ordenActual.findIndex(p => p.nombre === item.nombre);
    if (index !== -1) {
      if (this.ordenActual[index].cantidad > 1) {
        this.ordenActual[index].cantidad -= 1;
      } else {
        this.ordenActual.splice(index, 1);
      }
    }
  }
  
  eliminarProductoCompleto(item: any) {
    const index = this.ordenActual.findIndex(p => p.nombre === item.nombre);
    if (index !== -1) {
      this.ordenActual.splice(index, 1);
    }
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

  openPedidoDialog() {
    this.pedidoDialogVisible = true;
  }

  confirmDialogVisible: boolean = false;

// Abre el modal de confirmación
confirmarOrden() {
  this.confirmDialogVisible = true;
  
}

// Acción final después de confirmar
finalizarOrden() {
  // Aquí podrías enviar la orden al backend, guardar en historial, etc.
  console.log('✅ Orden confirmada:', this.ordenActual);
  console.log('Mesa:', this.mesaSeleccionada);
  this.mostrarDetalle = false;

  // Cierra los modales
  this.confirmDialogVisible = false;
  this.ordenDialogVisible = false;

  // Limpia la orden actual (opcional)
  this.ordenActual = [];
}
}

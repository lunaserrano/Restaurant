import { Component, inject, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputGroupModule } from 'primeng/inputgroup';
import { FluidModule } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KnobModule } from 'primeng/knob';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TreeSelectModule } from 'primeng/treeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TextareaModule } from 'primeng/textarea';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TabsModule } from 'primeng/tabs';
import { mesasInterface } from '../../../interface/mesasInterface';

@Component({
  selector: 'app-main-order',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    SelectButtonModule,
    InputGroupModule,
    FluidModule,
    IconFieldModule,
    InputIconModule,
    FloatLabelModule,
    AutoCompleteModule,
    InputNumberModule,
    SliderModule,
    RatingModule,
    ColorPickerModule,
    KnobModule,
    SelectModule,
    DatePickerModule,
    ToggleButtonModule,
    ToggleSwitchModule,
    TreeSelectModule,
    MultiSelectModule,
    ListboxModule,
    InputGroupAddonModule,
TextareaModule,
TabsModule
],
  templateUrl: './main-order.component.html',
  styleUrl: './main-order.component.scss'
})
export class MainOrderComponent implements OnInit{

  ngOnInit(): void {
    this.obtenerMesas();
  }
      
  locationOptions = [
    { label: 'Mesas', value: 'mesas' },
    { label: 'Barra', value: 'barra' },
    { label: 'Terraza', value: 'terraza' }
  ];
  selectedLocation: any;
  locationItems: any[] = [];
  menuCategories = [
    { name: 'Platos Fuertes' },
    { name: 'Desayunos' },
    { name: 'Bebidas' },
    { name: 'Postres' }
  ];
  selectedTable: any;
  selectedCategory: any;
  menuItems: any[] = [];
  order: any[] = [];
  listMesas: mesasInterface[] = [];
  onLocationChange(event: any) {
    if (event.value === 'mesas') {
      this.locationItems = Array.from({ length: 10 }, (_, i) => ({ name: `Mesa ${i + 1}` }));
    } else if (event.value === 'barra') {
      this.locationItems = Array.from({ length: 5 }, (_, i) => ({ name: `Barra ${i + 1}` }));
    } else if (event.value === 'terraza') {
      this.locationItems = Array.from({ length: 8 }, (_, i) => ({ name: `Terraza ${i + 1}` }));
    }
    this.selectedTable = null;
    this.selectedCategory = null;
    this.order = [];
  }

  selectTable(item: any) {
    this.selectedTable = item;
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.menuItems = Array.from({ length: 5 }, (_, i) => ({ name: `${category.name} ${i + 1}`, price: (i + 1) * 10 }));
  }

  selectMenuItem(item: any) {
    this.order.push(item);
  }

  get orderTotal() {
    return this.order.reduce((total, item) => total + item.price, 0);
  }

  confirmOrder() {
    alert('Orden confirmada');
  }

  obtenerMesas(){
    this.listMesas = [
      { codigo: 1, nombre: 'Mesa 1', acientos: 5 },
      { codigo: 2, nombre: 'Mesa 2', acientos: 4 },
      { codigo: 3, nombre: 'Mesa 3', acientos: 6 },
      { codigo: 4, nombre: 'Mesa 4', acientos: 3 },
      { codigo: 5, nombre: 'Mesa 5', acientos: 8 },
      { codigo: 6, nombre: 'Mesa 6', acientos: 2 },
      { codigo: 7, nombre: 'Mesa 7', acientos: 4 },
      { codigo: 8, nombre: 'Mesa 8', acientos: 6 },
      { codigo: 9, nombre: 'Mesa 9', acientos: 5 },
      { codigo: 10, nombre: 'Mesa 10', acientos: 7 }
    ];
    
  }
}

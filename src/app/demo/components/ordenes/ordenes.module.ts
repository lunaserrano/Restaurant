import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { ChipModule } from "primeng/chip";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { RatingModule } from 'primeng/rating';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputDemoRoutingModule } from '../uikit/input/inputdemo-routing.module';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [PedidosComponent],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    TabViewModule,
     ButtonModule, 
     DialogModule, 
     DropdownModule, 
     FormsModule, 
     ReactiveFormsModule,
     CommonModule,
     FormsModule,
     InputDemoRoutingModule,
     AutoCompleteModule,
     CalendarModule,
     ChipsModule,
     DropdownModule,
     InputMaskModule,
     InputNumberModule,
     ColorPickerModule,
     CascadeSelectModule,
     MultiSelectModule,
     ToggleButtonModule,
     SliderModule,
     InputTextareaModule,
     RadioButtonModule,
     InputTextModule,
     RatingModule,
     ChipModule,
     KnobModule,
     InputSwitchModule,
     ListboxModule,
     SelectButtonModule,
     CheckboxModule,
     ButtonModule,
     InputGroupModule,
     InputGroupAddonModule,
     TableModule,
     SidebarModule
  ]
})
export class OrdenesModule { }

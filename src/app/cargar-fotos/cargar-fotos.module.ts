import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarFotosPageRoutingModule } from './cargar-fotos-routing.module';

import { CargarFotosPage } from './cargar-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarFotosPageRoutingModule
  ],
  declarations: [CargarFotosPage]
})
export class CargarFotosPageModule {}

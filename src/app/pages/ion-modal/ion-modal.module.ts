import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonModalPageRoutingModule } from './ion-modal-routing.module';

import { IonModalPage } from './ion-modal.page';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonModalPageRoutingModule
  ],
  declarations: [
    IonModalPage,
  ModalComponent]
})
export class IonModalPageModule {}

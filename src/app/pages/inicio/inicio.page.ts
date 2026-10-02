import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule
  ]
})
export class InicioPage {

  frase = 'El éxito consiste en obtener lo que se desea.La felicidad en disfrutar lo que se obtiene.';
  autor = 'Ralph Waldo Emerson';

  irAGestionCitas() {
    window.location.href = '/gestion-citas';
  }

  irAConfiguracion() {
    window.location.href = '/configuracion';
  }

}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonButton,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class GestionCitasPage implements OnInit {

  formularioCita!: FormGroup;
  citas: { frase: string; autor: string }[] = [
  {
    frase: 'El éxito consiste en obtener lo que se desea. La felicidad en disfrutar lo que se obtiene.',
    autor: 'Ralph Waldo Emerson'
  },
  {
    frase: 'Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito.',
    autor: 'Thomas Edison'
  },
  {
    frase: 'Ningún viento es bueno para el barco que no sabe a dónde va.',
    autor: 'Séneca'
  }
];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formularioCita = this.formBuilder.group({
      frase: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
agregarCita() {
  if (this.formularioCita.valid) {

    this.citas.push({
      frase: this.formularioCita.value.frase,
      autor: this.formularioCita.value.autor
    });

    this.formularioCita.reset();

  } else {
    this.formularioCita.markAllAsTouched();
  }
}
}


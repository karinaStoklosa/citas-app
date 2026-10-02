import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({

selector: 'app-cita',

templateUrl: './cita.component.html',

styleUrls: ['./cita.component.scss'],

imports: [],

})

export class CitaComponent {


@Input() frase: string = '';

@Input() autor: string = '';


@Output() eliminar = new EventEmitter();


constructor() { }


borrarCita() {

this.eliminar.emit();

}

}

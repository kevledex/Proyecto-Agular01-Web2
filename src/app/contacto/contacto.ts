import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  /*formularioContacto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    descripcion: new FormControl('')
  })*/

    formBuilder = inject(FormBuilder);

    formularioContactoBuilder = this.formBuilder.group({
      name: [''],
      email: [''],
      telefono: this.formBuilder.group({
        personal: [''],
        convencional: [''],
        trabajo: ['']
      }),
      descripcion: ['']
    })



  enviar () {
    console.log(this.formularioContactoBuilder.value);
    alert('Se enviaron los datos de contacto')
  }
}
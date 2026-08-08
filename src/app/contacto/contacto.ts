import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private formBuilder = inject(FormBuilder);

  formularioContactoBuilder = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefono: this.formBuilder.group({
      personal: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      convencional: ['', [Validators.minLength(7), Validators.maxLength(8)]]
    }),
    descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
  })

  enviar() {
    this.formularioContactoBuilder.markAllAsTouched()

    if (this.formularioContactoBuilder.get('name')?.invalid) {
      alert('El nombre es obligatorio.')
      return
    }

    if (this.formularioContactoBuilder.get('email')?.invalid) {
      alert('El email es invalido')
      return
    }

    if (this.formularioContactoBuilder.get('telefono.personal')?.invalid) {
      alert('El teléfono personal debe tener 10 digitos')
      return
    }

    if (this.formularioContactoBuilder.get('telefono.convencional')?.invalid) {
      alert('El teléfono convencional debe tener de 7 a 8 digitos')
      return
    }

    if (this.formularioContactoBuilder.get('descripcion')?.invalid) {
      alert('La descripción debe tener entre 10 y 200 caracteres.')
      return
    }

    alert('El formulario se envio correctamente')
  }
}
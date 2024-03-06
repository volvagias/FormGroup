// import { Component } from '@angular/core';
// import { LibrosService } from './libros.service';
// import { NgModel } from '@angular/forms';

// export interface Biblioteca {
//   titulo: string, 
//   autor: string, 
//   género: string,
//   añoDePublicación: number,
//   disponible: boolean
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Libreria';

//   titulo: string = '';

//   biblioteca: Biblioteca[] = [];

//   constructor(private librosService: LibrosService) { 
//   }

//   buscarLibro() {
//     this.biblioteca = this.librosService.biblioteca_modulo().filter((bilbioteca) => bilbioteca.titulo === this.titulo);

//     if (this.biblioteca.length > 0) {
//       this.biblioteca;
//     } else {
//       alert("El libro no existe");
//     }
//   }

//   prestarLibro() {
    
//   }



// }

import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Inject, ViewChild, ElementRef, OnInit } from '@angular/core'; // rendered2
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formgroup';

  public permisosForm: any;

  startForm() {
    this.permisosForm = new FormGroup ({
      permisos: new FormArray([
      ])
    })

    this.agregarFilaPermisos();
  }
  

  get permisos(): FormArray {
    return this.permisosForm.get('permisos') as FormArray;
  } 

  constructor() {
  }

  ngOnInit() {
    this.startForm();
  }

  agregarFilaPermisos() {
    this.permisos.push(new FormControl(''));
  }

  borrarFilaPermisos(index:number): void {
    this.permisos.removeAt(index);
  }

}


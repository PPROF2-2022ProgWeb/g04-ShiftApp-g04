import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  formularioDeUsuario=FormGroup;

  constructor(public formulario:FormBuilder ) {
    
    /*this.formularioDeUsuario=this.formulario.group({
      nombre:[''],
      apellido:[''],
      fecha:[''],
      provincia:[''],
      contrasenia:[''],
      pais:[''],
      mail:[''],
    });*/


   }

  ngOnInit(): void {
  }
  enviarData(): any {
    console.log("Me presionaste")
    /*console.log(this.formularioDeUsuario.value);*/
  }

}

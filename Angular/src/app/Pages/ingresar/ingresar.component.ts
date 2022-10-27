import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  emailCtrl = new FormControl('', [Validators.required ]);
  passCtrl = new FormControl('' , [Validators.required]);

  constructor() {

    this.emailCtrl.valueChanges.pipe(debounceTime(500)).subscribe(value => {console.log(value);});
    this.passCtrl.valueChanges.pipe(debounceTime(500)).subscribe(value => {console.log(value);});

   }

  ngOnInit() {
  }

  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

  getPass(event: Event){
    event.preventDefault();
    console.log(this.passCtrl.value);
  }

  checkPass(): boolean{
    let estado = !(this.emailCtrl.disabled && this.passCtrl.disabled);
    console.log(estado);
    return estado;
  }

}

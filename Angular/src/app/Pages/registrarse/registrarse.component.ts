import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder , FormGroup, Validators } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor() {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]), 
      pass: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),     
    });

    this.form.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

}
 
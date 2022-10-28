import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder , FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuldier: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuldier.group({
      name:  ['' , [Validators.required]],
      lastname:  ['', [Validators.required]],
      date:  ['', [Validators.required]],
      email: ['', [Validators.required ,Validators.email]],
      pass:  ['', [Validators.required]],
      country:  ['', [Validators.required]],
      province:  ['', [Validators.required]],     
    });

    this.form.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get mameField(){
    return this.form.get('name'); 
  }
  get lastmameField(){
    return this.form.get('lastname'); 
  }
  get dateField(){
    return this.form.get('date'); 
  }
  get emailField(){
    return this.form.get('email'); 
  }
  get passField(){
    return this.form.get('pass'); 
  }
  get countryField(){
    return this.form.get('country'); 
  }
  get provinceField(){
    return this.form.get('province'); 
  }


}
 
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuldier: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuldier.group({

      email: ['', [Validators.required ,Validators.email]],
      pass:  ['', [Validators.required]],
    
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


  get emailField(){
    return this.form.get('email'); 
  }
  get passField(){
    return this.form.get('pass'); 
  }



  }



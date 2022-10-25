import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailCtrl = new FormControl('', [Validators.required ]);

  constructor() {

    this.emailCtrl.valueChanges.pipe(debounceTime(500)).subscribe(value => {console.log(value);});

   }

  ngOnInit() {
  }

  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }


}

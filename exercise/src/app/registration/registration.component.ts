import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  countryList = [
    {id: 1, name: 'USA'},
    {id: 2, name: 'China'},
    {id: 3, name: 'VN'},
    {id: 4, name: 'Lao'},
    {id: 5, name: 'CA'},
  ];
  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, this.checkPasswords),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  checkPasswords(group: AbstractControl): any {
    const passwordCheck = group.value;
    if (passwordCheck.password !== passwordCheck.confirmPassword) {
      return {notSame: true};
    } else {
      return null;
    }
  }
}

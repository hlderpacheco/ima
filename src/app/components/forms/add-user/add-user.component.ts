import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: [
    './add-user.component.scss',
    '../../../stylesheet/form.scss'
  ]
})
export class AddUserComponent implements OnInit {

  constructor(private location: Location, private fb: FormBuilder ) {}

  submitted = false;

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    province: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
    title: ['', Validators.required],
    role: ['', Validators.required],
    password: ['',Validators.required]
  });

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    //**must post the data here
  }

  get f() {
    return this.profileForm.controls;
  }

  addUserToSystem() {}

  back(): void {
    this.location.back()
  }

  ngOnInit(): void {
      
  }

}

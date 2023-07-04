import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: [
    './edit-user.component.scss',
    '../../../stylesheet/form.scss'
  ]
})
export class EditUserComponent implements OnInit {

  constructor(private location: Location, private fb: FormBuilder ) {}

  submitted = false;

  updateProfileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
    title: ['', Validators.required],
    role: ['', Validators.required]

  });

  onSubmit() {
    this.submitted = true;
    if (this.updateProfileForm.invalid) {
      return;
    }
    //**must post the data here
  }

  get f() {
    return this.updateProfileForm.controls;
  }

  editUserOnSystem() {}

  back(): void {
    this.location.back()
  }

  ngOnInit(): void {
      
  }

}

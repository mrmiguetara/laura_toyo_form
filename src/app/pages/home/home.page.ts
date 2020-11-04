import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }
  clearInput() {
    this.loginForm.reset()
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  signUpForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName':new FormControl("",Validators.required),
      'userName':new FormControl("",[Validators.required,Validators.minLength(3)]) 
    });
  }

  onUserSubmit(){
        console.log(this.signUpForm);
  }

}

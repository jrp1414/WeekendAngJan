import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
      'userName':new FormControl("",[Validators.required,Validators.minLength(3)]),
      'hobbies':new FormArray([new FormControl("",Validators.required)]),
      'addresses': new FormArray([
        new FormGroup({
          'addLine1':new FormControl("",Validators.required),
          'city':new FormControl("",Validators.required),
          'state':new FormControl("")        
        })
      ])
    });
  }
  //{firstName:"vfhbv",lastName:"fdgg",address:{addLine1:"fdf",city:"ff",state:"fs"}}
  onUserSubmit(){
        console.log(this.signUpForm);
  }
  AddHobby(){
    (<FormArray>this.signUpForm.get('hobbies')).push(new FormControl("",Validators.required));
  }

  AddAddress(){
    (<FormArray>this.signUpForm.get('addresses')).push(new FormGroup({
      'addLine1':new FormControl("",Validators.required),
      'city':new FormControl("",Validators.required),
      'state':new FormControl("")        
    }));
  }
}

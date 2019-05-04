import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormControl, 
  Validators, 
  FormArray, 
  FormBuilder, 
  AbstractControl, 
  ValidatorFn
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

function emailMatch(c:AbstractControl):{[key:string]:boolean} | null {
  let email= c.get("emailId");
  let confirmEmail = c.get("confirmEmailId");

  if (email.pristine || confirmEmail.pristine) {
    return null;
  }
  if (email.value === confirmEmail.value) {
    return null;
  }
  return {'emailMatch':true};
}

function rangeValidator(min:number,max:number):ValidatorFn{
  return function (c:AbstractControl):{[key:string]:boolean} | null {
  if(c.value<min || c.value >max){
      return {'range':true};
    }
    return null;
  } 
}

// function rangeValidator(c:AbstractControl):{[key:string]:boolean} | null {
//   // if(c.pristine && c.invalid){
//   //   return null;
//   // }
//   if(c.value && (c.value<1 || c.value >5)){
//     return {'range':true};
//   }
//   return null;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  signUpForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  private validationMessages = {
    required: "Please Enter your email address",
    email:"Please enter a valid email id"
  };

  ngOnInit() {
    this.signUpForm = this.fb.group({
      'firstName':['',Validators.required],
      'userName':['',[Validators.required,Validators.minLength(3)]],
      'rating':['',[Validators.required,rangeValidator(1,5)]],
      'emailGroup':this.fb.group({
        'emailId':['',[Validators.required,Validators.email]],
        'confirmEmailId':['',[Validators.required,Validators.email]],
      },{validator:emailMatch}),
      'mobileNo':'',
      'notification':'email',
      'hobbies':this.fb.array([this.fb.control('',Validators.required)]),
      'addresses':this.fb.array([this.fb.group({
        'addLine1':['',Validators.required],
        'city':['',Validators.required],
        'state':['',Validators.required]
      })])
    });

    this.signUpForm.get('notification').valueChanges.subscribe((value)=>{
      this.SetNotificationValidation(value);
    });

    let email = this.signUpForm.get("emailGroup.emailId");
    email.valueChanges.pipe(debounceTime(1000)).subscribe(value=>{
      this.setMessage(email);
    });

    // console.log(this.signUpForm.get('emailGroup.emailId').errors);
    // this.signUpForm = new FormGroup({
    //   'firstName':new FormControl("",Validators.required),
    //   'userName':new FormControl("",[Validators.required,Validators.minLength(3)]),
    //   'hobbies':new FormArray([new FormControl("",Validators.required)]),
    //   'addresses': new FormArray([
    //     new FormGroup({
    //       'addLine1':new FormControl("",Validators.required),
    //       'city':new FormControl("",Validators.required),
    //       'state':new FormControl("")        
    //     })
    //   ])
    // });
  }
  //{firstName:"vfhbv",lastName:"fdgg",address:{addLine1:"fdf",city:"ff",state:"fs"}}
  onUserSubmit(){
        console.log(this.signUpForm.value);
  }
  AddHobby(){
    (<FormArray>this.signUpForm.get('hobbies')).push(this.fb.control('',Validators.required));
  }

  AddAddress(){
    (<FormArray>this.signUpForm.get('addresses')).push(this.fb.group({
      'addLine1':['',Validators.required],
      'city':['',Validators.required],
      'state':['',Validators.required]
    }));
  }

  SetNotificationValidation(notificationType:string){
    let mobileNo = this.signUpForm.get('mobileNo');
    if(notificationType=='phone'){
      mobileNo.setValidators(Validators.required);
    }else{
      mobileNo.clearValidators();
    }
    mobileNo.updateValueAndValidity();
  }
  emailMessage="";
  setMessage(c:AbstractControl){
    this.emailMessage="";
    if((c.touched || c.dirty) && c.errors){
      this.emailMessage = Object.keys(c.errors).map(key=>this.validationMessages[key]).join(' ');
    }
  }
}



import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn:"root"
// })
export class AuthService{
    loggedIn:boolean= false;

    isAuthenticated():boolean{
        return this.loggedIn;
    }

    LogIn(){
        this.loggedIn = true;
        console.log("Logged In");        
    }

    LogOut(){
        this.loggedIn = false;   
        console.log("Logged Out");     
    }
}
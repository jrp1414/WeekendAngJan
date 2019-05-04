import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserComponent } from "../components/component.index";

@Injectable({
    providedIn:"root"
})
export class SignUpDeactivateGuard implements CanDeactivate<UserComponent>{
    canDeactivate(component: UserComponent, currentRoute: ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
        if (component.signUpForm.dirty) {
            let firstName = component.signUpForm.get("firstName").value || "New User";
            return confirm("Hey "+firstName+", Are you sure to navigate away and loose all data?");
        }
        return true;
    }

}
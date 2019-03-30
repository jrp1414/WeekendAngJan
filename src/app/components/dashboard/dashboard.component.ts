import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import "rxjs/Rx";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.numberObservableSubscription.unsubscribe();  
  }

  numberObservableSubscription:Subscription;
  constructor(private router:Router) { }

  ngOnInit() {
    // //Sample Observable created
    // const numberObservable = Observable.interval(1000).map((num:number)=>{
    //   return num*2;
    // });
    const numberObservable = Observable.interval(1000).map((num:number)=>num*2);

    this.numberObservableSubscription =  numberObservable.subscribe(
      (num:number)=>{console.log(num);}      
    );
    

    //Custom Observable
    // const customObservable = Observable.create((observer:Observer<string>)=>{
    //   setTimeout(()=>{
    //     observer.next("First Package");
    //   },2000);
    //   setTimeout(()=>{
    //     observer.next("Second Package");
    //   },4000);
    //   // setTimeout(()=>{
    //   //   observer.error("Some Error Occurred");
    //   // },5000);
    //   setTimeout(()=>{
    //     observer.complete();
    //   },5000);
    //   setTimeout(()=>{
    //     observer.next("Third Package");
    //   },7000);
    // });


    // customObservable.subscribe(
    //   (data:string)=>{console.log(data);},
    //   (err:string)=>{console.log(err);},
    //   ()=>{console.log("Completed");}
    // );

  }

  RedirectToProducts(){
    //bvhfbhjnjfbnjnbjnb
    this.router.navigate(["products"]);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'test-root',
  // selector: '[test-root]',
  selector: '.test-root',
  //template:'<h1>Inline Template Example</h1>',
  // template:`
  // <h1>Inline Template Example 2</h1>
  // <h2>This example is for adding multiple line of HTML in template property</h2>
  // `,
  templateUrl: './app.component.html',
  // styles:[
  //   '.myClass1{background-color: yellow;}',
  //   `.myClass2{
  //     background-color: blue;
    
  //   }`
  // ]
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    console.log("Inside NgOnInit");
  }
  constructor(){
    console.log("Inside Constructor");
  }
  title:string="Weekend Angular January";
}



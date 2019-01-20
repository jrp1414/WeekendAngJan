import { Component } from '@angular/core';

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
export class AppComponent {
  title:string="Weekend Angular January";
}



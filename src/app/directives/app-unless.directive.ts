import { Directive,  ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //*ngIf='conditiona'
  //[ngIf]="condition"

  @Input('appUnless') set unless(condition:boolean){
    if (!condition) {
      this.vc.createEmbeddedView(this.templateRef);
    } else {
      this.vc.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,private vc:ViewContainerRef) {
    // let book = new Book();
    // book.Name = "Test";
    // book.PublishYear = 2010;
    
    // console.log(book.Version);
    // console.log(book.PublishYear);
   }

}


class Book {
  Name:string;
  // PublishYear:number;
  private _version:number=1;
  private _publishYear:number=2012;

  get Version ():number{
    return this._version;
  }

  get PublishYear():number{
    return this._publishYear;
  }
  
  set PublishYear(year:number) {
   if (year>2012) {
     this._version = year - this._publishYear;
     this._publishYear = year;
   }
  }
  

}
// PublishYear = 2018
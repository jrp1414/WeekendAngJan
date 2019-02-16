import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
 selector:"[appBasicHighlight]"   
})
export class BasicHighlighter implements OnInit {
    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor = "yellow";
        this.el.nativeElement.style.backgroundColor = "yellow";
    }
    //element:ElementRef;
    constructor(private el:ElementRef) {
        // this.element = el;
        
    }


}
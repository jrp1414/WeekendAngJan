import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  @Input('appBetterHighlight') defaultColor:string;
  @Input() highlightColor:string;

  ngOnInit(): void {
    //this.renderer.setStyle(this.el.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    // this.renderer.setStyle(this.el.nativeElement,'background-color','aqua');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this.renderer.setStyle(this.el.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }


  @HostBinding('style.backgroundColor') backgroundColor:string;

}

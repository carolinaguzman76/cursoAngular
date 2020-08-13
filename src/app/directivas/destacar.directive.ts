import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {

  constructor(private el: ElementRef, private rederer: Renderer2) {
    rederer.setStyle(el.nativeElement, 'font-weight', 'bold');
    rederer.setStyle(el.nativeElement, 'font-style', 'italic');

   }

}

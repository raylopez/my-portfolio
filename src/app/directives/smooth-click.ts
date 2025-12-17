import { ViewportScroller } from '@angular/common';
import { Directive, ElementRef, HostListener, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSmoothClick]',
})
export class SmoothClick {

  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  private readonly scrollService = inject(ViewportScroller);

  public smoothTarget = input<string>('');

  constructor() {
   }

   @HostListener('click', ['$event'])
   public onHyperLinkClick(event : Event) {
    event.preventDefault();
    if (this.smoothTarget()) {
      this.scrollService.scrollToAnchor(this.smoothTarget(), { behavior: 'smooth', });
      this.scrollService.setOffset([0, 100])
    }
   }
}

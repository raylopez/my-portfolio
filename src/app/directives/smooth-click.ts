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
  public isFirstTarget = input<boolean>(false);

  @HostListener('click', ['$event'])
  public onHyperLinkClick(event : Event) {
    event.preventDefault();

    if (this.isFirstTarget()) {
      this.scrollService.scrollToPosition([0,0], { behavior: 'smooth' });
      return;
    }

    const smoothElement: HTMLElement = <HTMLElement>document.getElementById(this.smoothTarget());
    if (smoothElement) {
      this.scrollService.scrollToAnchor(smoothElement.id, { behavior: 'smooth', });
      this.scrollService.setOffset([0, 100])
    }
   }
}

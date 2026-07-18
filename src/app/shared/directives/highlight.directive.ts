import { Directive, ElementRef, inject, input, effect } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  readonly #el = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly appHighlight = input<string>('#ffff00');

  constructor() {
    effect(() => {
      this.#el.nativeElement.style.backgroundColor = this.appHighlight();
    });
  }
}
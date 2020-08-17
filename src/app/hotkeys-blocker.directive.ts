import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHotkeysBlocker]'
})
export class HotkeysBlockerDirective {


  constructor() {
  }

  @HostListener('paste', ['$event'])  public blockPaste(e: KeyboardEvent): void {    e.preventDefault();  }

  @HostListener('copy', ['$event'])  public blockCopy(e: KeyboardEvent): void {    e.preventDefault();  }

  @HostListener('cut', ['$event'])  public blockCut(e: KeyboardEvent): void {    e.preventDefault();  }


}

import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHotkeysBlocker]'
})
export class HotkeysBlockerDirective {


  constructor() {
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    document.addEventListener('copy', (e): void => {
      e.preventDefault();
    });
    document.addEventListener('paste', (e): void => {
      e.preventDefault();
    });
    document.addEventListener('cut', (e): void => {
      e.preventDefault();
    });
    oncontextmenu = (): boolean => {
      return false;
    };
  }
  // @HostListener('paste', ['$event'])  public blockPaste(e: KeyboardEvent): void {    e.preventDefault();  }
  // @HostListener('copy', ['$event'])  public blockCopy(e: KeyboardEvent): void {    e.preventDefault();  }
  // @HostListener('cut', ['$event'])  public blockCut(e: KeyboardEvent): void {    e.preventDefault();  }

  @HostListener('mouseleave') onMouseleave(): void {
    document.addEventListener('copy', (e): boolean => {
      return true;
    });
    document.addEventListener('paste', (e): boolean => {
      return true;
    });
    document.addEventListener('cut', (e): boolean => {
      return true;
    });
    oncontextmenu = (): boolean => {
      return true;
    };
  }


}

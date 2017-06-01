import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appDropdownMouseEnter]'
})
export class DropdownDirectiveMouseEnter {
  @HostBinding('class.open') isOpen = false;
  @Input() closeOnMouseLeave: string;

  @HostListener('mouseenter') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') mouseleave() {
    if(this.closeOnMouseLeave ==="true"){
      this.isOpen = false;
    }
  }
}

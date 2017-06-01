import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @Input() closeOnMouseLeave: string;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') mouseleave() {
    /*
    todo WTF?
    @Input() closeOnMouseLeave: boolean;
    it is still in runtime
    typeof this.closeOnMouseLeave ==="string"
     */
    if(this.closeOnMouseLeave ==="true"){
      this.isOpen = false;
    }
  }
}

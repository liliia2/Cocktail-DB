import { Component, Output, Input, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @Output() openedMenu = new EventEmitter<boolean>();
  @Input() stopShowMenu: boolean;
  showMenu: boolean = false;

  constructor() { }

  ngOnChanges(): void  {
    this.showMenu = this.stopShowMenu;
  }

  openMenu():void {
    this.showMenu = true;
    this.openedMenu.emit(true);
  }

  closeMenu():void {
    this.showMenu = false;
    this.openedMenu.emit(false);
  }

}

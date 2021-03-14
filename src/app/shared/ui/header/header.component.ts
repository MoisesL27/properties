import { HeaderMenu } from './header-menu';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() menus: HeaderMenu[] = [];
  @Output() showNextProperty = new EventEmitter<void>();

  isShown = false;

  toggle(): void {
    this.isShown = !this.isShown;
  }
}

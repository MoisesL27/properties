import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() showNextProperty = new EventEmitter<void>();

  isShown = false;

  toggle(): void {
    this.isShown = !this.isShown;
  }
}

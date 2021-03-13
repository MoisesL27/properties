import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navbarItems = ['Fotos', 'Menu'];
  navbarSelectedItem = 0;

  itemChange(index: number) {
    this.navbarSelectedItem = index;
  }
}

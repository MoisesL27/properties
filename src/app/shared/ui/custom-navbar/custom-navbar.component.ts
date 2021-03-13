import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

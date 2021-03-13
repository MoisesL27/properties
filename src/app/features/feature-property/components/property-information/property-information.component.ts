import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.component.html',
  styleUrls: ['./property-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyInformationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

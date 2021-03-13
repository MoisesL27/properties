import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-description',
  templateUrl: './property-description.component.html',
  styleUrls: ['./property-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

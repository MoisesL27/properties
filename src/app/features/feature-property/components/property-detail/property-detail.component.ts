import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

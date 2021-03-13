import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.component.html',
  styleUrls: ['./property-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyInformationComponent {
  @Input() title: string;
  @Input() address: string;
  @Input() price: number;
}

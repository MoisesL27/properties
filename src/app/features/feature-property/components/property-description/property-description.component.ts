import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Property } from '@shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-property-description',
  templateUrl: './property-description.component.html',
  styleUrls: ['./property-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDescriptionComponent {
  @Input() property$: Observable<Property>;
}

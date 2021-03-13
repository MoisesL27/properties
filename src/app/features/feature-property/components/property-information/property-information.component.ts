import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Property } from '@shared/models';

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.component.html',
  styleUrls: ['./property-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyInformationComponent {
  @Input() property$: Observable<Property>;

  @Output() showMap = new EventEmitter<void>();
}

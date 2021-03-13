import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Property } from '@shared/models';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailComponent {
  @Input() property$: Observable<Property>;
}

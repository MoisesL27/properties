import { map } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Property } from '@shared/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-property-description',
  templateUrl: './property-description.component.html',
  styleUrls: ['./property-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDescriptionComponent {
  private collapseHeigth = new BehaviorSubject('0');

  @Input() property$: Observable<Property>;

  collapseHeigth$ = this.collapseHeigth.asObservable();
  isOpen$ = this.collapseHeigth.pipe(map((value) => value !== '0'));

  toggleCollapse(element: HTMLDivElement): void {
    if (this.collapseHeigth.value !== '0') {
      this.collapseHeigth.next('0');
      return;
    }
    this.collapseHeigth.next(element.scrollHeight + 'px');
  }
}

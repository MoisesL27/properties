import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { UiModule } from '@shared/ui/ui.module';
import {
  PropertyDescriptionComponent,
  PropertyDetailComponent,
  PropertyInformationComponent,
  PropertyOverviewComponent,
} from './components';
import { IndexComponent } from './index/index.component';
@NgModule({
  imports: [CommonModule, TranslocoModule, AgmCoreModule, UiModule],
  declarations: [
    IndexComponent,
    PropertyDetailComponent,
    PropertyDescriptionComponent,
    PropertyInformationComponent,
    PropertyOverviewComponent,
  ],
  exports: [IndexComponent],
})
export class FeaturePropertyModule {}

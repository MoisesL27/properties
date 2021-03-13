import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@shared/ui/ui.module';
import {
  PropertyDetailComponent,
  PropertyDescriptionComponent,
  PropertyInformationComponent,
  PropertyOverviewComponent,
} from './components';
import { IndexComponent } from './index/index.component';
@NgModule({
  imports: [CommonModule, AgmCoreModule, UiModule],
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

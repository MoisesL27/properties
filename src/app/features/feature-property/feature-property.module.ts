import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from '@shared/ui/ui.module';
import { PropertyOverviewComponent } from './components/property-overview/property-overview.component';

@NgModule({
  imports: [CommonModule, NgbCarouselModule, UiModule],
  declarations: [PropertyOverviewComponent],
  exports: [PropertyOverviewComponent],
})
export class FeaturePropertyModule {}

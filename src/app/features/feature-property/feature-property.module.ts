import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@shared/ui/ui.module';
import { PropertyOverviewComponent } from './components/property-overview/property-overview.component';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [PropertyOverviewComponent],
  exports: [PropertyOverviewComponent],
})
export class FeaturePropertyModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';

@NgModule({
  imports: [CommonModule, NgbCarouselModule],
  declarations: [CustomNavbarComponent, CustomCarouselComponent],
  exports: [CustomNavbarComponent,CustomCarouselComponent],
})
export class UiModule {}

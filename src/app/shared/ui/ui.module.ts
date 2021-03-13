import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoModule } from '@ngneat/transloco';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';

@NgModule({
  imports: [CommonModule, NgbCarouselModule, TranslocoModule],
  declarations: [CustomNavbarComponent, CustomCarouselComponent],
  exports: [CustomNavbarComponent, CustomCarouselComponent],
})
export class UiModule {}

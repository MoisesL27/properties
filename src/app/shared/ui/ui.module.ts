import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoModule } from '@ngneat/transloco';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, NgbCarouselModule, NgbDropdownModule, TranslocoModule],
  declarations: [CustomNavbarComponent, CustomCarouselComponent, HeaderComponent],
  exports: [CustomNavbarComponent, CustomCarouselComponent, HeaderComponent],
})
export class UiModule {}

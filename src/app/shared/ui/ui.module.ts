import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomNavbarComponent],
  exports: [CustomNavbarComponent],
})
export class UiModule {}

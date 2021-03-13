import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturePropertyModule } from '@features/feature-property/feature-property.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeaturePropertyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

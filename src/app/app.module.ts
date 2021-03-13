import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturePropertyModule } from '@features/feature-property/feature-property.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    FeaturePropertyModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWtvyr65PWNflk7Lc2Yv-i9RfQngGxrtk',
    }),
  ],
  declarations: [AppComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

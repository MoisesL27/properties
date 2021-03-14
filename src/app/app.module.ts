import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturePropertyModule } from '@features/feature-property/feature-property.module';
import { API_URL } from '@shared/tokens';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FeaturePropertyModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey,
    }),
    HttpClientModule,
    TranslocoRootModule,
  ],
  declarations: [AppComponent],
  providers: [{ provide: API_URL, useValue: environment.apiUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}

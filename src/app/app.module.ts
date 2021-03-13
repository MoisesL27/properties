import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UiModule } from './shared/ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

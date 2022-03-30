import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GreeterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

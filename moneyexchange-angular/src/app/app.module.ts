import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ExchangeComponent } from "./exchange/exchange.component";
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [AppComponent, ExchangeComponent, FooterComponent, HeaderComponent, ContainerComponent],
  imports: [BrowserModule,HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

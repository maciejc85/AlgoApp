import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, HTTP_PROVIDERS } from "@angular/http";
import { routing, appRoutingProviders } from "./app.routes";
import { AppComponent }  from "./app.component";
import {FormsModule } from "@angular/forms";

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders, HTTP_PROVIDERS]
})
export class AppModule { }
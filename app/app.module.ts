import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { routing, appRoutingProviders } from "./app.routes";
import {FormsModule } from "@angular/forms";

import { AppComponent }  from "./app.component";
import { HomeComponent } from "./components/home/home";
import { DetailsComponent } from "./components/details/details";
import { DashboardComponent } from "./components/dashboard/dashboard";
import { SidenavComponent } from "./components/sidenav/sidenav";

import { BinarySearchService } from "./algos/binarySearch/binarySearch";
import { MergeSortService } from "./algos/mergeSort/mergeSort";
import { QuickSortService } from "./algos/quicksort/quicksort";
import { StackComponent } from "./algos/stack/stack.component";

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent,
                  HomeComponent,
                  DetailsComponent,
                  DashboardComponent,
                  SidenavComponent],              
  bootstrap: [AppComponent],
  providers: [ appRoutingProviders,
               BinarySearchService,
               MergeSortService,
               QuickSortService,
               StackComponent ]
})
export class AppModule { }
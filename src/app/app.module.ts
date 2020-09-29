import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AppRoutingModule} from "./app.routing";
import {OrdersModule} from "./orders/orders.module";
import {ComponentsModule} from "./components/components.module"


//we never import the modules that we want to LazyLoad, instead, we do it in the route through LoadChildren

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    ComponentsModule,
    
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


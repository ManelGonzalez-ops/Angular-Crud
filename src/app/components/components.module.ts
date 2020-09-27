import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component'


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from "./products.routing";
import { CreateProductComponent } from './products/create-product/create-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { ViewAllComponent } from './products/view-all/view-all.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { ViewByDateComponent } from './products/view-by-date/view-by-date.component';
import { ViewByCategoryComponent } from './products/view-by-category/view-by-category.component';
import {HttpClientModule} from "@angular/common/http"
import {ProductServiceService} from "./product-service.service"
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../shared/shared.module"

@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, AddProductComponent, UpdateProductComponent, DeleteProductComponent, ViewAllComponent, ViewProductComponent, ViewByDateComponent, ViewByCategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,    //that should go into app.module better
    FormsModule,
    SharedModule
  ],
  providers:[
    ProductServiceService  //the same here, to app-moduke
  ]
})
export class ProductsModule { }

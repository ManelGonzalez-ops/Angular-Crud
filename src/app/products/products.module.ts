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



@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, AddProductComponent, UpdateProductComponent, DeleteProductComponent, ViewAllComponent, ViewProductComponent, ViewByDateComponent, ViewByCategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
 
})
export class ProductsModule { }

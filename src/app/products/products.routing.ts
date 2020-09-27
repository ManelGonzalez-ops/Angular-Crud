import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import {ProductsComponent} from "./products/products.component"
import { ViewAllComponent } from './products/view-all/view-all.component';
import { ViewByCategoryComponent } from './products/view-by-category/view-by-category.component';
import { ViewByDateComponent } from './products/view-by-date/view-by-date.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

const routes: Routes = [
    { path: '', component: ProductsComponent,
    },
    {path: "list-all", component: ViewAllComponent},
    {path: "search", component: ViewByCategoryComponent},
    {path: "search-date", component: ViewByDateComponent},
    {path: "create", component: AddProductComponent},
    {path: "delete", component: DeleteProductComponent},
    {path: "product/:id", component: ViewProductComponent},
    {path: "update-product/:id", component: ViewProductComponent},
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class ProductsRoutingModule {

}
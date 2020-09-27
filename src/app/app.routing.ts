import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
        {
            path: 'products',
            loadChildren: ()=> import("./products/products.module").then(m=>m.ProductsModule),
        },
    ];

// const routes: Routes = [
//         {
//             path: 'products',
//             component: "",
//         },
//     ];

@NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
export class AppRoutingModule { }
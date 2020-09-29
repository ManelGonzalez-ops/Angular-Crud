import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/assets/interfaces';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  public addNewProduct(form):void{

    console.log(form.value, "fooorm")
    let newProduct: IProduct = {
      id: Math.floor(Math.random() * 100000),
      name: form.value.namee,
      category_id: form.value.category,
      price: form.value.price,
      description: form.value.description,
      imageLink: form.value.imageLink,
    }

    this.service.createProduct(newProduct).subscribe(data=>{
      console.log(data, "daaata retrieveeed")
    })
  }
  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
  }

}

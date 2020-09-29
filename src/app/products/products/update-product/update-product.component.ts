import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/assets/interfaces';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: number
  public namee: string
  public category: string
  public price: number
  public description:string
  public imageLink: string

  constructor(private route: ActivatedRoute, 
    private service: ProductServiceService) { }

  addNewProduct(form): void{  
  console.log(form.target.namee.value, "que coño hay aqui")

    let newProduct: IProduct = {
      id: this.productId,
      name: form.target.namee.value,
      category_id: form.target.category.value,
      price: form.target.price.value,
      description: form.target.description.value,
    }
    
    if(form.target.imageLink) { newProduct.imageLink = form.target.imageLink.value
      //we need to add the rest of optional parameters
    }
    this.service.updateProduct(this.productId, newProduct).subscribe(data=>{
      console.log(data)
    })
  }

 
  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.productId = data.id
    })
    this.getInitialData()
  }

  getInitialData(){
    this.service.getProduct(this.productId).subscribe(data=>{
      this.namee = data.name
      this.category= data.category_id
      this.price= data.price
      this.description= data.description
      this.imageLink= data.imageLink
    })
  }
}

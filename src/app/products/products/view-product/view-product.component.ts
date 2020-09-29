import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductServiceService } from '../../product-service.service';
import {IProduct} from "../../../../assets/interfaces"

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId: string
  product: IProduct
  constructor(private route: ActivatedRoute, private service: ProductServiceService ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get("id")
    this.route.params.subscribe(data=>{
      this.productId = data.id
    })

    this.service.getProduct(this.productId).subscribe((data: IProduct)=>{
      this.product = data
    })
  }

}

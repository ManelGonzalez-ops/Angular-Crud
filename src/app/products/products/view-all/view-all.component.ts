import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';
import {IProduct} from "../../../../assets/interfaces"
import {displayRating} from "./../../../../utils/rating"

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {


  public products: IProduct[] = []
 
  public selectedProduct: IProduct 


  public modalState: boolean = false

  rating(rating:number): any { 
    return displayRating(rating)}

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {

    this.service.getAllProducts().subscribe((data: IProduct[])=>{
      this.products = data
    })
   
  }

  toggleModal(){
    this.modalState = !this.modalState
  }


  public closeModal(){
    console.log("HOOOOOOOOOOOOLA")
    this.modalState = false
  }

openDeleteModal(object: IProduct): void {
  this.selectedProduct = object
  this.toggleModal()

}
  

}

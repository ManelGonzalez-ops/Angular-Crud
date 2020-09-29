import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ProductServiceService } from 'src/app/products/product-service.service';
import { IProduct } from 'src/assets/interfaces';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalOpen: boolean 
  alwaysTrue: boolean = true

  @Input() productMarked: IProduct 

 
  @Output() changes = new EventEmitter()

  

  informParentToClose(){
    this.changes.emit(false)
  }
 
  constructor(private service: ProductServiceService) { 
    
  }

  ngOnInit(): void {
  }

  //we don't really need ngOnChanges

  // ngOnChanges(changes: SimpleChange){
  //   console.log(changes)
  //   this.modalOpen = changes["modalOpen"].currentValue
  // }

  toggleModal(){
    console.log("clickao")
    this.modalOpen = false
  }

  public handleDelete(){
    this.service.deleteProduct(this.productMarked.id).subscribe(data=>{
      console.log(data)
    })
  }
  
  ngDoCheck(){
    console.log(this.productMarked && this.productMarked.id, "marcaaaaaao")
  }
  
}

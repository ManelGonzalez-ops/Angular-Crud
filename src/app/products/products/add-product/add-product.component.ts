import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/assets/interfaces';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() public product;
  @Output() myOutput = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  click(value: ProductComponent): void{
    this.myOutput.emit(value);
  }

}

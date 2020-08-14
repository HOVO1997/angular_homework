import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  public isLoading = false;
  @Input() public product;
  @Output() myOutput = new EventEmitter();
  public editProd: ProductComponent;
  public isEdit = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  click(value: ProductComponent): void {
    this.myOutput.emit(value);
  }

  deleteProd(value: ProductComponent): void {
    if (confirm('Delete item!')) {
      for (let i = 0; i < this.product.length; i++) {
        if (this.product[i] === value) {
          this.product.splice(i, 1);
          break;
        }
      }
    }
  }

  public edit(value): void {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isEdit = !this.isEdit;
      for (const v of this.product) {
        if (v === value) {
          this.editProd = v;
          this.isLoading = !this.isLoading;
        }
      }
    }, 1500);
  }
}

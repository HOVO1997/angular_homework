import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {ProductComponent} from '../product/product.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  public myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      title : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(18)]),
      description : new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(150)]),
      price : new FormControl('', [Validators.required, Validators.pattern('[0-9]{2,}')]),
      img : new FormControl('', Validators.required)
    });
  }

  public submit(value): void{
    this.isLoading = true;
    setTimeout(() => {
    for (const v of this.product) {
      if (v === value) {
       v.title = this.myForm.controls.title.value;
       v.description = this.myForm.controls.description.value;
       v.price = this.myForm.controls.price.value;
       v.image = this.myForm.controls.img.value;
       this.isEdit = !this.isEdit;
       this.isLoading = !this.isLoading;
      }
    }
    }, 1500);
  }

  ngOnInit(): void {
  }

  click(value: ProductComponent): void {
    this.myOutput.emit(value);
  }

  deleteProd(value: ProductComponent): void {
    if (confirm('Delete item!')) {
      this.isLoading = !this.isLoading;
      setTimeout(() => {
      for (let i = 0; i < this.product.length; i++) {
        if (this.product[i] === value) {
          this.product.splice(i, 1);
          this.isLoading = !this.isLoading;
          break;
        }
      }
      }, 1500);
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

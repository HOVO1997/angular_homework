import {Component, OnInit, Output} from '@angular/core';

import {ProductComponent} from './product/product.component';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public product: ProductComponent[] = [];
  public isLoading = true;
  public searchText: string;
  public cachedArray: ProductComponent[] = [];


  constructor(private dataService: DataService) {
  }

  myMethod(event: any): void {
    console.log(event);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 2000);
  }

  public getProducts(): void {
    this.dataService.getData().subscribe(users => this.product = this.cachedArray  = users.productList);
    this.isLoading = !this.isLoading;
  }

  public searchResult(result): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      this.searchText = result;
      this.product = this.cachedArray.filter((product: ProductComponent) => {
          return product.title.toLowerCase().includes(this.searchText.toLowerCase());
        }
      );
    }, 300);
  }

  public sortPrice($event: boolean): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      for (let j = 0; j < this.product.length; j++) {
        for (let i = 0; i < this.product.length - 1; i++) {
          if (this.product[i].price > this.product[i + 1].price) {
            const tmp = this.product[i];
            this.product[i] = this.product[i + 1];
            this.product[i + 1] = tmp;
          }
        }
      }
      if ($event === true) {
        this.product = this.product.reverse();
      }
    }, 1000);
  }


}

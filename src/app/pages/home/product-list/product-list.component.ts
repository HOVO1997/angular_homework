import {Component, OnInit} from '@angular/core';
import {ProductComponent} from './product/product.component';
import {DataService} from '../../../data.service';

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
    this.dataService.getData().subscribe(users => this.product = this.cachedArray = users.productList);
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

  public category(val: string): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      this.product = this.cachedArray;
      for (const prod of this.product) {
        this.product = this.product.filter(arr => arr.category === val);
      }
    }, 2000);
  }

  public discharge(): any {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      return this.product = this.cachedArray;
    }, 2000);
  }

  public sortPrice($event: boolean): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      this.product.sort((a, b) => {
        if (a.price === 0) {
          return 1;
        } else if (b.price === 0) {
          return -1;
        } else {
          return a.price - b.price;
        }
      });
      if ($event === true) {
        this.product = this.product.reverse();
      }
    }, 1000);
  }


}

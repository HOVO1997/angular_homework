import {Component, OnInit, Output} from '@angular/core';

import {ProductComponent} from './product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public product: ProductComponent[];
  public isLoading = true;
  public searchText: string;
  public cachedArray: ProductComponent[] = [];

  constructor() {
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
    this.cachedArray = this.product = [
      new ProductComponent(0, 'Dell', 'Dell Inspiron 3593  3593-8604 Intel Core i3-1005G1 (4M Cache, up to 3.40 GHz)-4GB RAM-1TB HDD', 500, 'https://static.nout.am/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/3/5/3593-8604.jpg'),
      new ProductComponent(1, 'Asus', 'Asus M570DD-DM009 15.6"(1920x1080) / AMD Quad Core R5-3500U (2.1GHz up to 3.7GHz) / 8GB RAM ', 100, 'https://static.nout.am/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/m/5/m570dd-dm009.jpg'),
      new ProductComponent(2, 'Msi', 'MSI Modern 14 B4MW-022RU 14"(1920×1080)IPS / AMD Ryzen 5 4500U(8MB, 2.3GHz Up to 4.0GHz) ', 254, 'https://static.nout.am/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/n/e/ne-0019368.jpg'),
      new ProductComponent(3, 'Lenovo', 'Lenovo IdeaPad S145-15IKB 15.6"(1920×1080) / Intel Core i3-8130U ', 1000, 'https://static.nout.am/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/8/1/81w800k2rk_1.jpg'),
      new ProductComponent(4, 'Hp', 'HP 240 G7 14" (1366x768) / Intel Core i3-7020U (3M Cache, 2.30 GHz ) / 8GB RAM / 128GB SSD', 300, 'https://static.nout.am/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/1/_/1_57_152.jpg'),
      new ProductComponent(5, 'Acer', 'Acer A315-41G 15.6" (1920x1080) / AMD Quad Core R5-2500U (4M Cache, 2GHz up to 3.6 GHz)', 4000, 'https://static.nout.am/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/1/_/1_31_14_1_1_1_2_1_2_1.jpg'),
    ];
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

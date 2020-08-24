import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  private routeSubscription: Subscription;
  public id: number;
  public product;

  constructor(private rout: ActivatedRoute, private dataService: DataService) {
    this.routeSubscription = rout.params.subscribe(params => this.id = params.id);
  }

  public getProducts(): void {
    this.dataService.getData().subscribe(item => this.product = item.productList);
    // for (const prod of this.product){
    //   if (prod.id === this.id){
    //     this.item = prod;
    //   }
    // }
  }

  ngOnInit(): void {
    this.getProducts();
  }

}

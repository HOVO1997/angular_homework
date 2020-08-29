import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {DataService} from '../../../../data.service';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  private routeSubscription: Subscription;
  public id: number;
  public product: ProductComponent[] = [];

  constructor(private rout: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((item) => {
      this.product = item.productList;
      this.routeSubscription = this.rout.params.subscribe((params) => {
        this.id = params.id;
        this.id = +this.id;
      });
    });
  }

}

import { Component } from '@angular/core';
import {ProductsService} from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:any;
  title = 'kc-task';
  constructor(private productData:ProductsService){}
  ngOnInit(): void {
    this.productData.getProducts().subscribe(res=>{
      this.products = res
      console.log(this.products)
    });
  };
}
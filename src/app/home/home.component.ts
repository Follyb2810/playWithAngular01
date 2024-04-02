import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ProductService } from '../service/product.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,CommonModule,PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private protectedService: ProductService) {}
  products:Product[]=[]
  totalRecords:number=0
  rows:number=5
  onProductOutput(products:Product){
    console.log(products,'output')
  }
  onPageChange(event:any){
    this.fetchProduct(event.page, event.rows)
  }
  fetchProduct(page:number,perPage:number){
    this.protectedService
      .getProduct('http://localhost:3000/clothes', { page, perPage })
      .subscribe((product:Products) => {
        this.products=product.items
        console.log(product.items);
        this.totalRecords=product.total
      });
  }
  ngOnInit() {
   this.fetchProduct(0,this.rows)
  }
}

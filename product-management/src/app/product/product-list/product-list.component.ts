import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  temp: Product = {};
  products: Product[] = [];
  id: number | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(next => {
      console.log(next);
      this.products = next;
    }, error => {

    }, () => {

    });
  }

  // getAll() {
  //   return this.products = this.productService.getAll();
  // }

  // delete(id: number) {
  //   this.productService.deleteProduct(id);
  // }

  delete() {
    // console.log(this.id);
    this.productService.delete(this.id).subscribe(next => {
      this.ngOnInit();
    });
  }

  deleteProduct(id: number | undefined) {
    this.id = id;
  }
}

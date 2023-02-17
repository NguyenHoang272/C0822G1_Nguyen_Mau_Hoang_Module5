import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
  }

  temp: Product = {};
  products: Product[] = [];
  categories: Category[] = [];
  id: number | undefined;
  page: number;
  // getAll() {
  //   return this.products = this.productService.getAll();
  // }

  // delete(id: number) {
  //   this.productService.deleteProduct(id);
  // }



  ngOnInit(): void {
    this.productService.getAll().subscribe(next => {
      console.log(next);
      this.products = next;
    }, error => {

    }, () => {

    });
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(next => {
      console.log(next);
      this.categories = next;
    });
  }

  delete() {
    // console.log(this.id);
    this.productService.delete(this.id).subscribe(next => {
      this.ngOnInit();
    });
  }

  deleteProduct(id: number | undefined) {
    this.id = id;
  }

  searchByNameAndCategory(nameSearch: string, category: string) {
    this.productService.searchByNameAndCategory(nameSearch, category).subscribe(next => {
      this.products = next;
    });
  }
}

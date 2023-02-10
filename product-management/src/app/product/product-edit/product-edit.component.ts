import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  updateForm: FormGroup;
  id: number;
  category: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = +data.get('id');
      this.getProduct(this.id);
    });
    this.categoryService.getAll().subscribe(next => {
      this.category = next;
    });
  }

  ngOnInit(): void {
  }

  // getProduct(id: number) {
  //   return this.productService.findProductById(id);
  // }
  //
  // updateProduct(id: number) {
  //   const product = this.productForm.value;
  //   this.productService.updateProduct(id, product);
  //   this.router.navigate(['/product/list']);
  // }
  // tslint:disable-next-line:variable-name

  update(id: any) {
    const product = this.updateForm.value;
    this.productService.update(id, product).subscribe(next => {
      alert('cập nhâp ok');
      this.router.navigateByUrl('');
    });
  }

  // tslint:disable-next-line:variable-name
  getProduct(number: number) {
    return this.productService.findById(number).subscribe(next => {
      this.updateForm = new FormGroup({
        id: new FormControl(next.id),
        name: new FormControl(next.name),
        price: new FormControl(next.price),
        description: new FormControl(next.description),
        category: new FormControl(next.category)
      });
    });
  }

  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}

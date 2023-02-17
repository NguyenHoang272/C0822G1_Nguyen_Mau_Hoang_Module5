import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  category: Category[] = [];

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern('([a-zA-Z\',.-]+( [a-zA-Z\',.-]+)*){2,30}')]),
      price: new FormControl('',[Validators.required, Validators.min(0)]),
      description: new FormControl(),
      category: new FormControl()
    });
    this.categoryService.getAll().subscribe(next => {
      console.log(next);
      this.category = next;
    });
  }

  ngOnInit(): void {
  }

  createProductWithReactive() {
    console.log(this.productForm);
    if (this.productForm.valid) {
      // tslint:disable-next-line:radix
      this.productForm.value.id = parseInt(this.productForm.value.id);
      // tslint:disable-next-line:no-debugger
      debugger;
      const temp = this.productService.addProduct(this.productForm.value).subscribe(next => {
        alert('Thêm mới thành công');
        // this.toastr.success('Hello world!', 'Toastr fun!');
        this.router.navigateByUrl('');
      }, error => {
      }, () => {
      });
    }

  }
}



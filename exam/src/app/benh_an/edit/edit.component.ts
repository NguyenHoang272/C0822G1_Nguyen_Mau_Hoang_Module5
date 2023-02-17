import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhNhan} from '../../model/benh-nhan';
import {ActivatedRoute, Router} from '@angular/router';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateForm: FormGroup;
  id: number;
  benhnhan: BenhNhan[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private benhAnService: BenhAnService, private benhNhanService: BenhNhanService) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = +data.get('id');
      this.getProduct(this.id);
    });
    this.benhNhanService.getAll().subscribe(next => {
      this.benhnhan = next;
    });
  }

  ngOnInit(): void {
  }

  update(id: any) {
    const benhan = this.updateForm.value;
    this.benhAnService.update(id, benhan).subscribe(next => {
      alert('cập nhâp ok');
      this.router.navigateByUrl('');
    });
  }

  // tslint:disable-next-line:variable-name
  getProduct(number: number) {
    return this.benhAnService.findById(number).subscribe(next => {
      this.updateForm = new FormGroup({
        tenBenhNhan: new FormControl(next.tenBenhNhan, [Validators.required]),
        ngayNhapVien: new FormControl(next.ngayNhapVien, [Validators.required]),
        ngayRaVien: new FormControl(next.ngayRaVien, [Validators.required]),
        lyDoNhapVien: new FormControl(next.lyDoNhapVien, [Validators.required]),
        phuongPhapDieuTri: new FormControl(next.phuongPhapDieuTri, [Validators.required]),
        bacSyDieuTri: new FormControl(next.bacSyDieuTri, [Validators.required])
      });
    });
  }

  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}

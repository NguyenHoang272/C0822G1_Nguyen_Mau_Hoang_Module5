import { Component, OnInit } from '@angular/core';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';
import {Router} from '@angular/router';
import {BenhAn} from '../../model/benh-an';
import {BenhNhan} from '../../model/benh-nhan';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private benhAnService: BenhAnService, private benhNhanService: BenhNhanService, private router: Router) { }
  temp: BenhAn = {};
  benhAns: BenhAn[] = [];
  benhNhans: BenhNhan[] = [];
  id: number | undefined;

  ngOnInit(): void {
    this.benhAnService.getAll().subscribe(next => {
      console.log(next);
      this.benhAns = next;
    }, error => {

    }, () => {

    });
    this.getAllBenhNhan();
  }


  private getAllBenhNhan() {
    this.benhNhanService.getAll().subscribe(next => {
      console.log(next);
      this.benhNhans = next;
    });
  }

  delete() {
    // console.log(this.id);
    this.benhAnService.delete(this.id).subscribe(next => {
      this.ngOnInit();
    });
  }

  deleteBenhAn(id: number | undefined) {
    this.id = id;
  }
}

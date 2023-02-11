import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";

@Component({
  selector: 'app-contrac-list',
  templateUrl: './contrac-list.component.html',
  styleUrls: ['./contrac-list.component.css']
})
export class ContracListComponent implements OnInit {
  contractList: Contract[] = [
    {id: 1, startDate: '11/12/2002', endDate: '22/12/2002', deposit: 222222222, total: 10111111}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

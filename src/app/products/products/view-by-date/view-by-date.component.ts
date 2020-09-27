import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-by-date',
  templateUrl: './view-by-date.component.html',
  styleUrls: ['./view-by-date.component.css']
})
export class ViewByDateComponent implements OnInit {

  data: string
  constructor() { }

  ngOnInit(): void {
  }

}

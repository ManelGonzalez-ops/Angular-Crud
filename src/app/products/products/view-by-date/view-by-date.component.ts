import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-by-date',
  templateUrl: './view-by-date.component.html',
  styleUrls: ['./view-by-date.component.css']
})
export class ViewByDateComponent implements OnInit {

  searchDate: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      this.searchDate = data.date
    })
  }

}

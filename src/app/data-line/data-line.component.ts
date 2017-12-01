import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-line',
  templateUrl: './data-line.component.html',
  styleUrls: ['./data-line.component.scss']
})
export class DataLineComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}

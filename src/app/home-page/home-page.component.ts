import { Component, OnInit } from '@angular/core';
import { HomePageMock } from '../../mocks/home-page';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data = HomePageMock;

  constructor() { }

  ngOnInit() {
  }

}

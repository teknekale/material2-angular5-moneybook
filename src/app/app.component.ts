import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns = ['title', 'amount', 'otherValue', 'otherLabel'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}

export interface Element {
  title: string;
  amount: number;
  otherValue: number | string;
  otherLabel: string;
}

const ELEMENT_DATA: Element[] = [
  { title: 'account',    amount: 1.0079,  otherValue: null,  otherLabel: null },
  { title: 'creditcard', amount: 4.0026,  otherValue: 802,   otherLabel: 'remaining' },
  { title: 'actual',     amount: 6.941,   otherValue: null,  otherLabel: null },
  { title: 'income',     amount: 9.0122,  otherValue: null,  otherLabel: null },
  { title: 'outcome',    amount: 10.811,  otherValue: '55%', otherLabel: 'income' },
  { title: 'saving 2%',  amount: 12.0107, otherValue: null,  otherLabel: null },
  { title: 'saving 3%',  amount: 14.0067, otherValue: null,  otherLabel: null },
  { title: 'savings',    amount: 15.9994, otherValue: '30%', otherLabel: 'income' },
];



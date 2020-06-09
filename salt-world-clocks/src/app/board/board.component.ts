import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public locations: { city: string; continent: string }[] = [
    { city: 'Amsterdam', continent: 'Europe' },
    { city: 'Los Angeles', continent: 'America' },
    { city: 'Tokyo', continent: 'Asia' },
    { city: 'Berlin', continent: 'Europe' },
    { city: 'London', continent: 'Europe' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

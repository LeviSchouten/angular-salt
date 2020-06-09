import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  private _getTime(continent: string, city: string): string {
    return moment.tz(continent + '/' + city).format('h:m:s');
  }

  public time: string;

  private _formatName(name: string): string {
    return name.replace(' ', '_');
  }
  private _updateTime(): void {
    setInterval(() => {
      this.time = this._getTime(
        this._formatName(this.continent),
        this._formatName(this.city)
      );
    }, 1000);
  }
  @Input() city: string;
  @Input() continent: string;

  constructor() {}

  ngOnInit(): void {
    this._updateTime();
  }
}

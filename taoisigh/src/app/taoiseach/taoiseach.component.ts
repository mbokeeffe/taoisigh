import { Component, OnInit } from '@angular/core';
import { Taoiseach } from '../taoiseach';
import taoisighData from '../../json/taoisigh.js';

@Component({
  selector: 'app-taoiseach',
  templateUrl: './taoiseach.component.html',
  styleUrls: ['./taoiseach.component.scss']
})
export class TaoiseachComponent implements OnInit {
  taoisigh = taoisighData;
  taoiseach: Taoiseach = taoisighData[taoisighData.length - 1];

  setTaoiseach(index) {
    console.log('set taoiseach', index);
    this.taoiseach = taoisighData[index];
  }

  constructor() { }

  ngOnInit() {
  }

}

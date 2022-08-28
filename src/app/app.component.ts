import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  students:any[];
  constructor() {}
  ngOnInit(): void {
      fetch('./assets/data/students.json').then(res=>res.json())
      .then(json=>{
        this.students=json;
      })
  }
}

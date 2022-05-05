import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-col-img50txt50',
  templateUrl: './col-img50txt50.component.html',
  styleUrls: ['./col-img50txt50.component.css']
})
export class ColImg50txt50Component implements OnInit {
  
  @Input() data: Observable<any> | undefined;

  constructor() { }

  ngOnInit() {
  }

}
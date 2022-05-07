import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.css']
})
export class TitleContentComponent implements OnInit {

  @Input() data: Observable<any> | undefined;

  constructor() { }

  ngOnInit() {
  }

}
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intro-title',
  templateUrl: './intro-title.component.html',
  styleUrls: ['./intro-title.component.css']
})
export class IntroTitleComponent implements OnInit {

  @Input() data: Observable<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
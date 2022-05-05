import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intro-title',
  templateUrl: './intro-title.component.html',
  styleUrls: ['./intro-title.component.css']
})
export class IntroTitleComponent implements OnInit {

  @Input() introData: Observable<any> | undefined;
  @Input() title: string | undefined;
  @Input() image: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-whattodo',
  templateUrl: './whattodo.component.html',
  styleUrls: ['./whattodo.component.css']
})
export class WhattodoComponent implements OnInit {

  wtdIntroBG: Observable<any>;
  wtdIntroTxt: Observable<any>;
  wtdGalleryData: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.wtdIntroBG = this.service.getDocument('IntroBG', 'WhatToDo');
    this.wtdIntroTxt = this.service.getDocument('WhatToDo', 'intro');
    this.wtdGalleryData = this.service.getCollection('WhatToDo/Categories/WhatToDo');
  }

  ngOnInit(): void {
  }

}

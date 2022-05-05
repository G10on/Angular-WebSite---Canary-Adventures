import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RetrieveService } from '../../services/retrieve.service';

@Component({
  selector: 'app-whattodo',
  templateUrl: './whattodo.component.html',
  styleUrls: ['./whattodo.component.css']
})
export class WhattodoComponent implements OnInit {

  wtdGalleryData: Observable<any[]>;

  constructor(private service: RetrieveService) {
    this.wtdGalleryData = this.service.getCollection('HomeCategories');
  }

  ngOnInit(): void {
  }

}

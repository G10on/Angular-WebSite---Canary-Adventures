import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RetrieveService } from '../../services/retrieve.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catIntroBG: Observable<any>;
  catIntroTxt: Observable<any>;
  catGallery: Observable<any> | undefined;

  constructor(private service: RetrieveService) {
    this.catIntroBG = this.service.getDocument('IntroBG', 'ScubaDi');
    this.catIntroTxt = this.service.getDocument('Category', 'intro');
    this.catGallery = this.service.getCollection('Category/Categories/ScubaDive');
  }

  ngOnInit() {
  }

}
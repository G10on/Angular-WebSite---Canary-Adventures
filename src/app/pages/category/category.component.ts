import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: RetrieveService, router:Router) {

    let basePath = "Category/Categories";
    this.catIntroBG = this.service.getDocument('IntroBG', router.url);
    this.catIntroTxt = this.service.getDocument('Category', 'intro');
    this.catGallery = this.service.getCollection(basePath + router.url);

  }

  ngOnInit() {
  }

}
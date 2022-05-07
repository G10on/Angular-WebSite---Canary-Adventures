import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RetrieveService} from "../../services/retrieve.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeIntroBG: Observable<any>
  homeCatTxt: Observable<any>;
  homeInspTxt: Observable<any>;
  homeEventTxt: Observable<any>;
  homeGalleryData: Observable<any[]>;
  homeGalleryInspiredData: Observable<any[]>;
  homeGalleryEventData: Observable<any[]>;


  constructor(private service: RetrieveService) {
    this.homeIntroBG = this.service.getDocument('IntroBG', 'Home');
    this.homeCatTxt = this.service.getDocument('Home', 'discover');
    this.homeInspTxt = this.service.getDocument('Home', 'inspired');
    this.homeEventTxt = this.service.getDocument('Home', 'events');
    this.homeGalleryData = this.service.getCollection('HomeCategories');
    this.homeGalleryInspiredData = this.service.getCollection('WhatToDo/Categories/WhatToDo');
    this.homeGalleryEventData = this.service.getCollection('EventRelated');
  }

  ngOnInit(): void {
  }

}

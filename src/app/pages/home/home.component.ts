import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RetrieveService} from "../../services/retrieve.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeIntroBG: Observable<any[]>
  homeCatTxt: Observable<any[]>;
  homeInspTxt: Observable<any[]>;
  homeGalleryData: Observable<any[]>;
  homeGalleryInspiredData: Observable<any[]>;
  homeGalleryEventData: Observable<any[]>;

  docTest: Observable<any>;


  constructor(private service: RetrieveService) {
    this.homeIntroBG = this.service.getCollection('IntroBGs');
    this.homeCatTxt = this.service.getCollection('HomeCatTxt');
    this.homeInspTxt = this.service.getCollection('HomeInspTxt');
    this.homeGalleryData = this.service.getCollection('HomeCategories');
    this.homeGalleryInspiredData = this.service.getCollection('HomeInspired');
    this.homeGalleryEventData = this.service.getCollection('EventRelated');
    this.docTest = this.service.getDocument('HomeTitleInfo', 'TO27uaCDg3yGybi6WJXS');
  }

  ngOnInit(): void {
  }

}

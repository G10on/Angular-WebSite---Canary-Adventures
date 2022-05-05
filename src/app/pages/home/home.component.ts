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
  homeTitleInfo: Observable<any[]>;
  homeGalleryData: Observable<any[]>;
  homeGalleryInspiredData: Observable<any[]>;
  homeGalleryEventData: Observable<any[]>;


  constructor(private service: RetrieveService) {
    this.homeIntroBG = this.service.getCollection('IntroBGs');
    this.homeTitleInfo = this.service.getCollection('HomeTitleInfo');
    this.homeGalleryData = this.service.getCollection('HomeCategories');
    this.homeGalleryInspiredData = this.service.getCollection('HomeInspired');
    this.homeGalleryEventData = this.service.getCollection('EventRelated');
  }

  ngOnInit(): void {
  }

}

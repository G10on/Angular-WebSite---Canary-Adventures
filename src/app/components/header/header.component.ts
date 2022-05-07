import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";

@Component ({
  selector:'web-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  siteLanguages: Observable<any[]>;
  headerNavItems: Observable<any[]>;
  dropdownNavItems: Observable<any[]>;
  islandDestinations: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.islandDestinations = this.service.getCollection('HeaderDestination');
    this.siteLanguages = this.service.getCollection('HeaderSiteLanguages');
    this.headerNavItems = this.service.getCollection('HeaderNavItems');
    this.dropdownNavItems = this.service.getCollection('HeaderDropdownNavItem');
  }
}




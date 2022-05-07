import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'event-page',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  eventSections: Observable<any[]>;
  eventRelatedSections: Observable<any[]>;
  eventGallery: Observable<any[]>;
  eventInformation:  Observable<any[]>;
  eventRelatedContent: Observable<any[]>;

  constructor(service: DatabaseService) {
    this.eventSections = service.getCollection("/EventPage/EventCollection/EventSections");
    this.eventRelatedSections = service.getCollection("/EventPage/EventCollection/EventRelatedSections");
    this.eventGallery = service.getCollection("/EventPage/EventCollection/EventGallery");
    this.eventRelatedContent = service.getCollection("/EventPage/EventCollection/EventRelatedContent");
    this.eventInformation = service.getCollection("/EventPage/EventCollection/EventInformation");
  }

}
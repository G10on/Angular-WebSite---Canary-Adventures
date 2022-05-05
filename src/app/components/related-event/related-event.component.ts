import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-related-event',
  templateUrl: './related-event.component.html',
  styleUrls: ['./related-event.component.css']
})
export class RelatedEventComponent {
  @Input() relatedContent: Observable<any[]> | undefined;
  faCalendarDays = faCalendarDays;
  faLocationDot = faLocationDot;

  constructor() {

  }

}
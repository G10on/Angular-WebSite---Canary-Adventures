import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import { faAt, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-event-information',
  templateUrl: './event-information.component.html',
  styleUrls: ['./event-information.component.css']
})
export class EventInformationComponent {
  @Input() information: Observable<any[]> | undefined;
  @Input() title: string | undefined;
  faLocationDot = faLocationDot;
  faAt = faAt;
  faPhone = faPhone;

  constructor() {

  }

}
import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  @Input() images: Observable<any[]> | undefined;
  faShareNodes = faShareNodes;

  constructor() {

  }


}
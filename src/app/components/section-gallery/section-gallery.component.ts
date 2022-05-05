import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-section-gallery',
  templateUrl: './section-gallery.component.html',
  styleUrls: ['./section-gallery.component.css']
})
export class SectionGalleryComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() content: string | undefined;
  @Input() blocksData: Observable<any> | undefined;

  constructor() { }

  ngOnInit() {
  }

}
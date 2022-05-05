import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-block-gallery',
  templateUrl: './block-gallery.component.html',
  styleUrls: ['./block-gallery.component.css']
})
export class BlockGalleryComponent implements OnInit {

  @Input() blocksData: Observable<any> | undefined;

  constructor() { }

  ngOnInit() {
  }

}
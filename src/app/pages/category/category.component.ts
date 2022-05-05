import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RetrieveService } from '../../services/retrieve.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  data: Observable<any> | undefined;

  constructor(private service: RetrieveService) {
    this.data = this.service.getCollection('WTDCategories');
  }

  ngOnInit() {
  }

}
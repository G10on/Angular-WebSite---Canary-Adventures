import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqSections: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.faqSections = this.service.getCollection('FaqSections');
  }

  ngOnInit(): void {
  }

}

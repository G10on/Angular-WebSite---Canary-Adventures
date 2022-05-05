import { Component, OnInit } from '@angular/core';
import {RetrieveService} from "../../services/retrieve.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqSections: Observable<any[]>;

  constructor(private service: RetrieveService) {
    this.faqSections = this.service.getCollection('FaqSections');
  }

  ngOnInit(): void {
  }

}

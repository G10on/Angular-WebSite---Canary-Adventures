import { Component, OnInit } from '@angular/core';
import {DService} from "../../services/D.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqSections: Observable<any[]>;

  constructor(private service: DService) {
    this.faqSections = this.service.getCollection('FaqSections');
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  newsletterSections: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.newsletterSections = this.service.getCollection('NewsletterSections');
  }

  ngOnInit(): void {
  }

}

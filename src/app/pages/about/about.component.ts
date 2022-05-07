import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/d.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutSections: Observable<any[]>;
  companyInformation: Observable<any[]>;

  constructor(private service: RetrieveService) {
    this.aboutSections = this.service.getCollection('AboutSectionContent');
    this.companyInformation = this.service.getCollection('CompanyContactInformation');
  }

  ngOnInit(): void {
  }

}

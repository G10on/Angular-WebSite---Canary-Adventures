import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";

@Component ({
  selector:'web-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']
})
export class FooterComponent {
  footerLinks: Observable<any[]>;
  footerSocialMediaLinks: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.footerLinks = this.service.getCollection('FooterLinks');
    this.footerSocialMediaLinks = this.service.getCollection('FooterSocialMediaLinks');
  }
}

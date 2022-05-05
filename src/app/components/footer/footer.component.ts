import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {RetrieveService} from "../../services/retrieve.service";

@Component ({
  selector:'web-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']
})
export class FooterComponent {
  footerLinks: Observable<any[]>;
  footerSocialMediaLinks: Observable<any[]>;

  constructor(private service: RetrieveService) {
    this.footerLinks = this.service.getCollection('FooterLinks');
    this.footerSocialMediaLinks = this.service.getCollection('FooterSocialMediaLinks');
  }
}

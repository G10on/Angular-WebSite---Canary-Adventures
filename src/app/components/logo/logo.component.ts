import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Logo} from "../../model/interfaces.model";
import {RetrieveService} from "../../services/retrieve.service";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logoInfo: Observable<any[]>;

  constructor(private service: RetrieveService) {
    this.logoInfo = this.service.getCollection('SiteLogo');
  }

  ngOnInit(): void {
  }

}

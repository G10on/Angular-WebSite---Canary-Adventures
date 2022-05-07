import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Logo} from "../../model/interfaces.model";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logoInfo: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.logoInfo = this.service.getCollection('SiteLogo');
  }

  ngOnInit(): void {
  }

}

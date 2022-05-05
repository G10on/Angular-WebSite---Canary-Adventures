import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class RetrieveService {

  constructor(private db: AngularFirestore) { }

  getCollection(path: string) {
    return this.db.collection(path).valueChanges();
  }

}
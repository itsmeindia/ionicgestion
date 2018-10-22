import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase,FirebaseListObservable} from "angularfire2/database";
import {AddUtilPage} from '../add-util/add-util';
import {UtilItem} from "../../models/util-item/util.item.interface";
/**
 * Generated class for the UtilListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-util-list',
  templateUrl: 'util-list.html',
})
export class UtilListPage {

  utilListRef$: FirebaseListObservable<UtilItem[]>

  constructor(public navCtrl: NavController, public navParams:
    NavParams,private database: AngularFireDatabase) {
    this.utilListRef$= this.database.list('util-list').valueChanges();}

  navigatateToAddUtilPage() {
    this.navCtrl.push(AddUtilPage);

  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UtilItem} from "../../models/util-item/util.item.interface";
import { AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

/**
 * Generated class for the AddUtilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-util',
  templateUrl: 'add-util.html',
})
export class AddUtilPage {

  utilItem = {} as UtilItem;

  utilItemRef$: FirebaseListObservable<UtilItem[]>

  constructor(public navCtrl: NavController, public navParams:
    NavParams,private database: AngularFireDatabase){

    this.utilItemRef$ = this.database.list('util-list');

  }

  AddUtilItem(utilItem: UtilItem){

   this.utilItemRef$.push({
     itemEmail :this.utilItem.itemEmail,
     itemName :this.utilItem.itemName,
     itemPhone :Number(this.utilItem.itemPhone),
     itemVille :this.utilItem.itemVille
     });

    this.utilItem = {} as UtilItem;
    this.navCtrl.pop();
  }

}

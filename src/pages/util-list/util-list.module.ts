import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UtilListPage } from './util-list';

@NgModule({
  declarations: [
    UtilListPage,
  ],
  imports: [
    IonicPageModule.forChild(UtilListPage),
  ],
})
export class UtilListPageModule {}

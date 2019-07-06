import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewforumqueryPage } from './newforumquery.page';

const routes: Routes = [
  {
    path: '',
    component: NewforumqueryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewforumqueryPage]
})
export class NewforumqueryPageModule {}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BustimePage } from '../bustime/bustime.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private inAppBrowser: InAppBrowser, public navCtrl: NavController) {}

  BusTime() {
    this.navCtrl.navigateForward('/bustime');
  }

  redirect() {
    this.inAppBrowser.create('http://www.pondiuni.edu.in/schools');
   }
   redirect2() {
    this.inAppBrowser.create('http://www.pondiuni.edu.in/syllabus-oncampus');
   }

   redirect3() {
    this.inAppBrowser.create('https://pu.onlineregistrationform.org/pondiuni/');
   }
   redirect4() {
    this.inAppBrowser.create('http://www.pondiuni.edu.in/news?quicktabs_2=1#quicktabs-2');
   }
   redirect5() {
    this.inAppBrowser.create('http://www.pondiuni.edu.in/news?quicktabs_2=0#quicktabs-2');
   }
   redirect6() {
    this.inAppBrowser.create('http://www.pondiuni.edu.in/content/contact-us');
   }
}




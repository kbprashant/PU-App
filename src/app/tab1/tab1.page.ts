import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {data: any;

  constructor(
    private inAppBrowser: InAppBrowser,
    private storage: Storage
  ) {
    this.data = {};

    const sampleObj = [
      {
        // tslint:disable-next-line:max-line-length
        fnews: 'PU ranked 101 under Gender Equality and 200 under Climate Action categories.'
      }, {
        fnews: 'NIRF 2019 Ranking – PU moves upto 48 rank from 59 rank under University category.'
      }, {
        fnews: 'International Conference on Building Agile Workforce.'
      }
    ];

    // Set Object Value
    this.setValue('offices', sampleObj);
  }

  // set a key/value
  setValue(key: string, value: any) {
    this.storage.set(key, value).then((response) => {
      console.log('set' + key + ' ', response);

      // get Value Saved in key
      this.getValue(key);

    }).catch((error) => {
      console.log('set error for ' + key + ' ', error);
    });
  }

  // get a key/value pair
  getValue(key: string) {
    this.storage.get(key).then((val) => {
      console.log('get ' + key + ' ', val);
      this.data[key] = '';
      this.data[key] = val;
    }).catch((error) => {
      console.log('get error for ' + key + '', error);
    });
  }

  // Remove a key/value pair
  removeKey(key: string) {
    this.storage.remove(key).then(() => {
      console.log('removed ' + key);
      this.data[key] = '';
    }).catch((error) => {
      console.log('removed error for ' + key + '', error);
    });
  }

  // Get Current Storage Engine Used
  driverUsed() {
    console.log('Driver Used: ' + this.storage.driver);
  }

  // Traverse key/value pairs
  traverseKeys() {
    this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
      console.log('key ' + key);
      console.log('iterationNumber ' + iterationNumber);
      console.log('value ' + value);
    });
  }

  // Traverse key/value pairs
  listKeys() {
    this.storage.keys().then((k) => {
      console.table(k);
    });
  }

  // Total Keys Stored
  getKeyLength() {
    this.storage.length().then((keysLength: Number) => {
      console.log('Total Keys ' + keysLength);
    });
  }

  redirect() {
    this.inAppBrowser.create('https://drive.google.com/drive/folders/1Ps0NH4uSTMtu3MOy0_TxnBs6TFv1jkWu?usp=sharing');
   }

   redirect2() {
    this.inAppBrowser.create('https://puextras.blogspot.in');
   }
}

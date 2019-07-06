import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.page.html',
  styleUrls: ['./news1.page.scss'],
})
export class News1Page {
  data: any;

  constructor(
    private inAppBrowser: InAppBrowser,
    private storage: Storage,
    private socialSharing: SocialSharing
  ) {
    this.data = {};
    // Set String Value
    this.setValue('name', 'PrashantB');
    // Set Integer Value
    this.setValue('phone', 16384034);

    const Datas = [
      {
        img: '',
        title: 'Two Faces',
        desc: 'Drama at Dept. of Performing Arts',
        date: '12/04/2019'
      }
    ];

    // Set Object Value
    this.setValue('Database', Datas);
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

  shareViaOptions() {
    const options = {
      files: '',
      chooserTitle: 'Two Faces',
      subject: 'Drama at Dept. of Performing Arts',
      date: '12/04/2019'
   };

   this.socialSharing.shareWithOptions(options).then((res) => {
    console.log('Success!');
   }).catch(() => {
    console.log('Error!');
   });

}
redirect() {
  this.inAppBrowser.create('https://www.pondiuni.edu.in');
 }

 share() {
  this.socialSharing.share('Message', 'Subject', 'https://www.pondiuni.edu.in', 'https://www.pondiuni.edu.in').then(() => {

      console.log('Shared Successfully');

  }).catch(() => {

      console.log('Sharing Failed');

  });
}
}

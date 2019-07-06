import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  data: any;

  constructor(
    private storage: Storage
  ) {
    this.data = {};
    // Set String Value
    this.setValue('name', 'PrashantB');
    // Set Integer Value
    this.setValue('phone', 16384034);

    const Datas = [
      {
        img: 'https://steemitimages.com/DQmbsy3neKZAtKHCR4z8DR9zU5Ae6m6chjn2HVYMVRc8sxg/pho.jpg',
        title: 'Sarah',
        desc: 'Dept. of Mass Comm.',
        date: '12/04/2019'
      }, {
        img: 'https://drscdn.500px.org/photo/105149131/m%3D900/2b185a5788738b61bd5f2810830b2595',
        title: 'Priya',
        desc: 'Dept. of Mass Comm.',
        date: '10/04/2019'
      }, {
        // tslint:disable-next-line:max-line-length
        img: 'https://drscdn.500px.org/photo/109243793/m%3D900/v2?webp=true&sig=c255dd335f06c6d1c4d62ea3441f806d563232afd2fb6edc9a1b4a8a9edaafd9',
        title: 'Andrew',
        desc: 'Dept. of Mass Comm.',
        date: '06/04/2019'
      }, {
        // tslint:disable-next-line:max-line-length
        img: 'https://drscdn.500px.org/photo/104331063/m%3D900/v2?webp=true&sig=1e0b8c5f7851c107c451f895b4ddecf8f723b674b4f9ae99918a1d7a6d6bf17d',
        title: 'Robert',
        desc: 'Dept. of Mass Comm.',
        date: '06/04/2019'
      }, {
        // tslint:disable-next-line:max-line-length
        img: 'https://drscdn.500px.org/photo/153466249/m%3D900/v2?webp=true&sig=5066eaeb88d653fcc3eb0d3abb4588e93de64f10f8ae8152fc79abc600ec9b61',
        title: 'Stephen',
        desc: 'Dept. of Mass Comm.',
        date: '06/04/2019'
      }, {
        // tslint:disable-next-line:max-line-length
        img: 'https://drscdn.500px.org/photo/149881157/m%3D900/v2?webp=true&sig=9c5ae73d8120a4083828ccd66d054e61e744526fba7e63a1af4b4e8a7d8069e2',
        title: 'Thanos',
        desc: 'Dept. of Mass Comm.',
        date: '06/04/2019'
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

  // Total Keys Stored
  getKeyLength() {
    this.storage.length().then((keysLength: Number) => {
      console.log('Total Keys ' + keysLength);
    });
  }

}

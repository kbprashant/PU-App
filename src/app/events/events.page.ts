import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {
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
        img: '',
        title: 'Two Faces',
        desc: 'Drama at Dept. of Performing Arts',
        date: '12/04/2019'
      }, {
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Dr._Bhimrao_Ambedkar.jpg',
        title: 'BR Ambedkar',
        desc: 'Film Screening at Dept. of Mass Communication',
        date: '10/04/2019'
      }, {
        img: '',
        title: 'Fest O Beats',
        desc: 'Hostel Day Celebraion at Thiruvalluvar Stadium',
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

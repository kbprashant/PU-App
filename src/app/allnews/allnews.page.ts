import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.page.html',
  styleUrls: ['./allnews.page.scss'],
})
export class AllnewsPage {
  data: any;

  constructor(
    private storage: Storage
  ) {
    this.data = {};
    // Set String Value
    this.setValue('name', 'PrashantB');
    // Set Integer Value
    this.setValue('rno', '16384034');

    const Datas = [
      {
        // tslint:disable-next-line:max-line-length
        img: 'http://www.pondiuni.edu.in/sites/default/files/imagecache/circular_innerimage/Time%20Higher%20Education%20World%20Impact%20Ranking%202019-admv-09042019.jpg',
        title: 'Times Higher Education World Impact Ranking 2019 PU best in Gender Equity in India',
        // tslint:disable-next-line:max-line-length
        desc: 'http://www.pondiuni.edu.in/sites/default/files/imagecache/circular_innerimage/Timdesc:http://www.pondiuni.edu.in/sites/default/files/imagecache/circular_innerimage/Time%20Higher%20Education%20World%20Impact%20Ranking%202019-admv-09042019.jpge%20Higher%20Education%20World%20Impact%20Ranking%202019-admv-09042019.jpg',
        date: '09/04/2019',
        url: '/news1'
      }, {
        img: '',
        title: 'BR Ambedkar',
        desc: 'Film Screening at Dept. of Mass Communication',
        date: '10/04/2019',
        url: '/news2'
      }, {
        img: '',
        title: 'Fest O Beats',
        desc: 'Hostel Day Celebraion at Thiruvalluvar Stadium',
        date: '06/04/2019',
        url: '/news3'
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

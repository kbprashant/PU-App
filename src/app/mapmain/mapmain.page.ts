import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  Platform
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Environment
} from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-mapmain',
  templateUrl: './mapmain.page.html',
  styleUrls: ['./mapmain.page.scss'],
})
export class MapmainPage implements OnInit {

  map: GoogleMap;
  address: string;

  constructor(
    public toastCtrl: ToastController,
    private platform: Platform
    ) { }

  ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    this.platform.ready();
    this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAaDQjX9VcLRjsh9RtRim7ow5gTWCqRm0g',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAaDQjX9VcLRjsh9RtRim7ow5gTWCqRm0g'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
      target: {
       lat: 12.017901,
      lng: 79.858981
      },
      zoom: 16,
      tilt: 30
      }
    });
  }

}

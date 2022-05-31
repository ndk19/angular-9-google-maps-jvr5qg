import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  // @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  // center = { lat: 24, lng: 12 };
  // markerOptions = { draggable: false };
  // markerPositions: google.maps.LatLngLiteral[] = [];
  // zoom = 4;
  // display?: google.maps.LatLngLiteral;

  // addMarker(event: google.maps.MouseEvent) {
  //   this.markerPositions.push(event.latLng.toJSON());
  // }

  // move(event: google.maps.MouseEvent) {
  //   this.display = event.latLng.toJSON();
  // }

  // openInfoWindow(marker: MapMarker) {
  //   this.infoWindow.open(marker);
  // }

  // removeLastMarker() {
  //   this.markerPositions.pop();
  // }
}

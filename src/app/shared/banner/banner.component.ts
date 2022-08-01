import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {



  images = [1058, 1077].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor() {}


  ngOnInit(): void {
  }

}

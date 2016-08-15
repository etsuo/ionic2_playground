import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageOnePage} from '../page-one/page-one';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  pageOne = PageOnePage;

  constructor(private navCtrl: NavController) {

  }
}

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageTwoPage} from '../page-two/page-two';

/*
 Generated class for the PageOnePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/page-one/page-one.html',
})
export class PageOnePage {

  pageTwo = PageTwoPage;

  constructor(private navCtrl: NavController) {

  }

}

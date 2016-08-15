import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';

/*
 Generated class for the PageTwoPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/page-two/page-two.html',
})
export class PageTwoPage {

  constructor(private navCtrl: NavController,
              private  load: LoadingController) {

  }

  onLoading() {
    let spin = this.load.create({
      content: 'Loading something magical and world changing.'
    });

    spin.present();

    this
      .someMockApiCall()
      .then(() => {
        spin
          .dismiss()
          .then(() => {
            this.navCtrl.pop();
          });
      });
  }

  private someMockApiCall() {
    return new Promise((resolve) => {
      resolve();
    });
  }
}

import { Component, Input } from '@angular/core';

import { SocialSharing } from '@ionic-native/social-sharing';
import { Observable } from 'rxjs';

@Component({
  selector: 'common-header',
  templateUrl: 'common-header.html'
})
export class CommonHeaderComponent {
  @Input() title:string;
  @Input('noMenu') noMenu:Observable<boolean>;
  text: string;

  constructor(private socialSharing: SocialSharing) {
    // console.log('Hello CommonHeaderComponent Component');
    this.text = 'Hello World';
  }

  share(){
    let shareOpts = {
      message: 'http://www.katara.net/en/About/News/Pages/default.aspx?isdlg=1',
      subject: 'Katara Cultural Village',
      file: null,
      url: ''
    };
    this.socialSharing.share(shareOpts.message, shareOpts.subject, null, null).then((success) => {
      // Sharing via email is possible
      console.log(success);
    }).catch(() => {
      // Sharing via email is not possible
    });
    
  }

}

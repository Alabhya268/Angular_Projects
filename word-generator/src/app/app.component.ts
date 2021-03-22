import { Component } from '@angular/core';
import arrayWords from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'word-generator';

  words:String = '';
  limit:number = 10;

  handleSingleChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

}

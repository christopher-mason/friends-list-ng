import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friends-list';
  newFriend = '';
  isDisabled = false;
  // create an Array named friends and populate with some friends
  friends = ["Sean", "Ron", "Chris"];

  addFriend() {
    this.friends.push(this.newFriend);
  }
}

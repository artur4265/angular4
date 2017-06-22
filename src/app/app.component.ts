import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire4/database';
import { AngularFireAuth } from 'angularfire4/auth';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})export class AppComponent {
  title = 'app works!';



  items: FirebaseListObservable<any[]>;
  
  articles: FirebaseListObservable<any[]>;


  constructor(db: AngularFireDatabase) {
    this.items = db.list('/messages');
    this.articles = db.list('/articles');
  }

addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }





}

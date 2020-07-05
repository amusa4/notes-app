import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'notes-app';
  firstNote = new Note('First Note', 'HEYYY');
  Notes = [this.firstNote];

}

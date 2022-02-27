import { Component, EventEmitter, Output } from '@angular/core';
import {Notes} from './note/notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  @Output() AddNote = new EventEmitter<any>();

  title = 'notes-app';

  public addNote(title: string, body: string) {
    this.AddNote.emit({title, body});
  }

}



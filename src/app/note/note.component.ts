import { Component, OnInit, Input } from '@angular/core';
import {Notes} from './notes';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
@Input() public state: string;
  constructor() { }

  ngOnInit(): void {

  }

  public getNotes(): Notes {
    return Notes.Notes;
  }

  public addNote(title,body)
  {
    Notes.addNote(title,body);
  }

  public deleteNote(title)
  {
    Notes.deleteNote(title);
  }


}

import { NoteFormComponent } from './../note-form/note-form.component';
import { Component, OnInit, Input } from '@angular/core';
import { Notes } from './notes';
import { FormService } from '../form.service';
import { Note } from './note';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() public state: string;
  constructor(public formService: FormService) { }
  public notes:Note[];
  ngOnInit(): void {
    this.notes = Notes.getNotes();
  }

  public getNotes(): Notes {
    return Notes.getNotes();
  }

  public deleteNote(id: number) {
    Notes.deleteNote(id);
  }

  //show and set up the edit page
  public editNote(title, body, id) {
    this.formService.formTitle = title;
    this.formService.formBody = body;
    this.formService.formId = id;
    this.formService.onEdit = true;
    this.formService.toggle();

  }

  closeNoteForm(test) {
    // alert(test);
    console.log(test);

  }

}

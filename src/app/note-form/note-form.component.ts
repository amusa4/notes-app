import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  constructor() { }
  public switchForm = false;
  ngOnInit(): void {
  }

  public toggle() {
    this.switchForm = !this.switchForm;
  }
}

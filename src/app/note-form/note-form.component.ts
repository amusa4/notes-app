import { FormService } from './../form.service';
import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Notes } from '../note/notes';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  @ViewChild('title', { static: true }) title: ElementRef;

  @ViewChild('body', { static: true }) body: ElementRef;

  @ViewChild('modal', { static: true }) modal: ElementRef;

  @ViewChild('modalContent', { static: true }) modalContent: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {

    if (event.target == this.modal.nativeElement) {
      this.formService.onClose();
      this.modalContent.nativeElement.style = "";
    }

  }

  constructor(public formService: FormService) { }

  ngOnInit(): void {

  }

  public onContentReady() {
    this.title.nativeElement.value = "example";
  }

  public save(title, body) {
    //alert("save changes");

    if (this.formService.onEdit === true) {

      this.formService.onEdit = false;

    }
    else {

      Notes.addNote(title.value, body.value);

    }

    this.formService.onClose();

  }

  public editNote(title, body) {

    Notes.editNote(title.value, body.value, this.formService.formId);
    this.formService.onClose();

  }

  public close(modal)
  {
    console.log("yo: " + modal);
  }

}
function checkIfYourTargetIsWithinSomeParentFunction(target: EventTarget, arg1: string) {
  console.log("yo");
}


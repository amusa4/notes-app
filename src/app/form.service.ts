import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() { }

  public formTitle: string;
  public formBody: string;
  public formId: number;
  public onEdit = false;
  public switchForm = false;

  public toggle() {
    this.switchForm = !this.switchForm;
  }

  public onClose() {
    if (this.onEdit == true) {
      this.onEdit = false;
    }
    this.toggle();
  }

  public edit(title, body) {
    this.switchForm = !this.switchForm;
  }

  public getFormTitle() {
    return this.formTitle;
  }

  public getFormBody() {
    return this.formBody;
  }

}

export class Note {
  title: string;
  body: string;
  id?: number;

  static id: number = 0;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
    this.id = ++Note.id;
  }

  getID() {
    return this.id;
  }

}
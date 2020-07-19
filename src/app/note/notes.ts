import { Note } from './note';

export class Notes {

    static Notes = [
        new Note('First Note', 'HEYYY'),
        new Note('Second Note', 'HEYYY'),
        new Note('Third Note', 'HEYYY'),
    ];

    static addNote(title: string, body: string) {
        const newNote = new Note(title, body);
        this.Notes.push(newNote);
    }


    static deleteNote(title: string) {
        const notePosition  = this.Notes.findIndex(n => n.title === title);
        this.Notes.splice(notePosition, 1);
    }

    static editNote() {

    }

    private static check()
    {

    }


}
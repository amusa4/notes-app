import { Note } from './note';
import data from '../datasource/notestData.json';

export class Notes {
    private static Notes:Note[];

    private static loadNotesFromFile(): JSON {
        const loadedNotes = (<any>data);
        console.log(loadedNotes);

        return loadedNotes;

    }

    private static convertJsonNotesToNotes() {

        const jsonNotes = this.loadNotesFromFile();

        var notes: Note[] = [];
        var keys = Object.keys(jsonNotes);
        keys.forEach(function (key) {
            notes.push(new Note(jsonNotes[key].title, jsonNotes[key].body));
        });

        return notes;
    }



    static getNotes() {
        this.Notes =this.convertJsonNotesToNotes();
        return this.Notes;
    }

    static addNote(title: string, body: string) {
        
        const newNote = new Note(title, body);
        this.Notes.push(newNote);
    }


    static deleteNote(id: number) {
        const notePosition = this.Notes.findIndex(n => n.id === id);
        this.Notes.splice(notePosition, 1);
    }

    static editNote(title: string, body: string, id: number,) {
        const notePosition = this.Notes.findIndex(n => n.id === id);
        this.Notes[notePosition].title = title;
        this.Notes[notePosition].body = body;

    }


}
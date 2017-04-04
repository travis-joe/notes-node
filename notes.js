console.log('starting notes.js');
const fs = require('fs');
// module.exports.addNotes = () => {
//     console.log('addNotes');
//     return 'New note';
// };
//
// module.exports.add = (a, b) => a + b;
const fetchNotes = () => {
    try{
        //read JSON
        let noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch(e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    const duplicateNotes = notes.filter( (note) => note.title === title );
    if(duplicateNotes.length === 0) {
        //add to notes
        notes.push(note);
        //write JSON
        saveNotes(notes);
        return note;
    }

};

const getAll = () => {
  return fetchNotes();
};
const getNote = (title) => {
    const notes = fetchNotes();
    return notes.filter((note) => note.title === title )[0];
};
const removeNote = (title) => {
    const notes = fetchNotes();
    const result = notes.filter((note) => note.title !== title );
    saveNotes(result);
    // console.log(`Removing note ${title}`);
    return notes.length !== result.length;
};
const logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`title:${note.title}`);
    console.log(`body:${note.body}`);
};
module.exports  = { addNote, getAll, getNote, removeNote, logNote};
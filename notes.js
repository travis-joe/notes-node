console.log('starting notes.js');
const fs = require('fs');
// module.exports.addNotes = () => {
//     console.log('addNotes');
//     return 'New note';
// };
//
// module.exports.add = (a, b) => a + b;

const addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };
    try{
        //read JSON
        let noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    }catch(e) {

    }

    const duplicateNotes = notes.filter( (note) => note.title === title );
    if(duplicateNotes.length === 0) {
        //add to notes
        notes.push(note);
        //write JSON
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

};

const getAll = () => {
  console.log('Getting all notes')
};
const getNote = (title) => {
    console.log(`getting note ${title}`)
};
const removeNote = (title) => {
    console.log(`Removing note ${title}`)
};
module.exports  = { addNote, getAll, getNote, removeNote};
/**
 * Created by travisjoe on 17-4-4.
 */
// const obj = {
//     name: 'Andrew',
// };
//
// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// const peopleString = '{"name": "Andrew", "age": "25"}';
// const people = JSON.parse(peopleString);
// console.log(typeof people);
// console.log(people);

const fs = require('fs');

let originNote = {
    title:'some title',
    body:'some body'
};
let originNoteString = JSON.stringify(originNote);
fs.writeFileSync('notes.json',originNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(note.title);
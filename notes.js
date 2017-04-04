console.log('starting notes.js');

// module.exports.addNotes = () => {
//     console.log('addNotes');
//     return 'New note';
// };
//
// module.exports.add = (a, b) => a + b;

const addNote = (title, body) => {
    console.log(title,body)
};

const getAll = () => {
  console.log('Getting all notes')
};
const getNote = (title) => {
    console.log(`getting note ${title}`)
};
const removeNote = (title) => {
    console.log(`Removing note ${title}`)
}
module.exports  = { addNote, getAll, getNote, removeNote};
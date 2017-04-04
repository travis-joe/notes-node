/**
 * Created by weelg on 2017/3/29.
 */
console.log('start app');

const fs = require('fs');
// const os = require('os');

// const user = os.userInfo();
// console.log(user.username);
// fs.appendFileSync('greetings.txt',`hello!${user.username}`);

const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

console.log(command, argv);

if(command === 'add') {
    const note = notes.addNote(argv.title,argv.body);
    if(note) {
        console.log('Note Created!');
        notes.logNote(note)
    }else{
        console.log('Note title taken!')
    }
}else if(command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach( (note) => notes.logNote(note) )
}else if(command === 'read') {
    const note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found!');
        notes.logNote(note)
    }else{
        console.log('Note not found!')
    }
}else if(command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved? 'note have been removed' : 'title not found';
    console.log(message);
}


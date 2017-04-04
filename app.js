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
        console.log('--');
        console.log(`title:${note.title}`);
        console.log(`body:${note.body}`);
    }else{
        console.log('Note title taken!')
    }
}else if(command === 'list') {
   notes.getAll()
}else if(command === 'read') {
    notes.getNote(argv.title)
}else if(command === 'remove') {
    notes.removeNote(argv.title)
}


const notes=require('./notes.js')
// const chalk = require('chalk')
const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder:{
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string',
        },
        title: {
            describe:'Note title',
            type:'string',
            demandOption: true,
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title,argv.body)
        // console.log("Title: "+ argv.title +"\nBody: "+argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder:{
        title: {
            demandOption:true,
            type:'string',
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list of notes',
    handler: ()=>{
        notes.listNotes()
        // console.log("list of notes")
    }
})
yargs.command({
    command: 'read',
    describe: 'read specific notes',
    builder:{title:{
        demandOption:true,
        type:'string',
    }},
    handler: (argv)=>{
        notes.getNotes(argv.title);
        // console.log("reading specific notes")
    }
})
yargs.parse();
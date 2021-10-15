const fs=require('fs');
const chalk = require('chalk')


const getNotes= (title)=>{
    const notes=loadNotes()
    const NoteBody=notes.find((note)=>{
        return note.title===title
    })
    if(NoteBody){
        console.log(chalk.rgb(200,90,200)("Body: "))
        console.log(NoteBody.body)
    }else{
        console.log("No note exists")
    }
}

const listNotes= ()=>{
    console.log(chalk.blue.inverse("Your Notes"))
    const notes=loadNotes()
    notes.forEach((note)=>console.log("• "+note.title))
}


const removeNote=(title)=>{
    const notes=loadNotes()
    const notesAfterDeletion=notes.filter((note)=>{
        return note.title!=title
    })

    if(notes.length===notesAfterDeletion.length){
        console.log(chalk.red.inverse("No note found"))
    }else{
        saveNotes(notesAfterDeletion)
        console.log(chalk.green.inverse("Note removed successfully"))

    }
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.find((note)=>{
        return note.title===title
    })
    if(!duplicateNotes){
        notes.push({title:title,body:body});
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added successfully"))
    }else{
        console.log(chalk.rgb(255,0,0).inverse("title already exists"))
    }
}
const loadNotes=()=>{
    try{
        const rawData=fs.readFileSync('./notes.json')
        return JSON.parse(rawData)
    }catch(err){
        return []
    }
}

const saveNotes=(notes)=>{
    fs.writeFileSync('./notes.json',JSON.stringify(notes))
}

module.exports={
    removeNote:removeNote,
    getNotes:getNotes,
    addNote:addNote,
    listNotes:listNotes,
    getNotes:getNotes
  }
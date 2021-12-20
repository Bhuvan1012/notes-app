const fs = require("fs");
const chalk = require("chalk");

// function to show all notes
const loadNotes = () => {
  try {
    const data = JSON.parse(fs.readFileSync("notes.json"));
    return data;
  } catch (e) {
    return [];
  }
};

// function to save notes
const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

// function to add a note
const addNote = (title, body) => {
  const notes = loadNotes();
  const noteAddCondition = notes.find((note) => note.title === title)
  const note = {
    title: title,
    body: body,
  };
  if (!noteAddCondition) {
    notes.push(note);
    saveNotes(notes);
    console.log(chalk.greenBright.bold("Note added successfully."));
  } else {
    console.warn(chalk.redBright.bold("Note with this title already exists."));
  }
};

// function to remove a note
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.greenBright.bold("Note removed successfully."));
  } else {
    console.log(chalk.redBright.bold("No note with this title found."));
  }
};

// function to list all notes
const listNotes = ()=>{
    const notes = loadNotes()
    if(notes.length>0)
    {notes.map((i) =>
      console.log(
        chalk.greenBright(`{\ntitle: ${i.title}, \nbody: ${i.body}\n},`)
      )
    );}else{
        console.log(chalk.redBright.bold("No notes to list."))
    }
}

//function to read a specific note
const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find(note=>note.title===title)
  if(noteToRead){
      console.log(chalk.greenBright(`{ title: ${noteToRead.title},\nbody: ${noteToRead.body}\n}`))
  }else{
      console.log(chalk.redBright.bold("No note found with this title."))
  }
};

module.exports = { addNote, removeNote, listNotes,readNote };

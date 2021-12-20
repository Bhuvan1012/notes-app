const chalk = require("chalk");
const yargs = require("yargs");
const notes = require('./notes')

// Add a note
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note Title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(chalk.yellowBright.bold.inverse("Adding a note"));
   notes.addNote(argv.title,argv.body)
  },
});

// Remove a note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title that you want to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(chalk.yellowBright.bold.inverse("Removing a note"));
    notes.removeNote(argv.title)
  },
});

// List all notes
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    console.log(chalk.yellowBright.bold.inverse("Listing out all notes"));
    notes.listNotes()
  },
});

// Read a note
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title that you want to read",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(chalk.yellowBright.bold.inverse("Reading a note"));
    notes.readNote(argv.title)
  },
});

yargs.parse();
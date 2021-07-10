const yargs = require("yargs");
const fs = require('fs');
const{addNotes,removeNote,listNodes}= require("./notes");

yargs.command({
    command:"add",
    describe:"adding notes",
    builder:{
        title:{
            describe:"Adding title",
            demandOption:true,
            type:String
        },
        body:{
            describe:"Adding body of notes :: ",
            demandOption:true,
            type:String
        }
    },
    handler(argv){
        // console.log(`Added notes with title "${argv.title}" which is "${argv.body}"`);
        addNotes(argv.title,argv.body);
    }
});

yargs.command({
    command:"remove",
    describe:"removing notes",
    builder:{
        title:{
            describe:"Giv title to remove",
            demandOption:true
        }
    },
    handler(argv){
        // console.log("notes removed");
        removeNote(argv.title);
    }
});

yargs.command({
    command:"list",
    describe:"listing notes",
    handler(){
        // console.log("notes :: ");
        listNodes();
    }
});

//Leaving this function nonfunctional, what a tedious task, Laters >>
yargs.command({
    command:"read",
    describe:"reading notes",
    handler(){
        console.log("reading ... notes");
    }
});

// console.log(yargs.argv);
yargs.parse();



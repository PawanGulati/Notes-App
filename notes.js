const fs = require('fs');
const chalk = require('chalk');

//function dealin with adding notes
const addNotes = (title,body)=>{
    let notes = loadNotes();
    // console.log(notes);

    //Checking notes duplicacy
    let duplicate = notes.filter((el)=>{
        return el.title === title;
    })

    //Making new note
    if(!duplicate.length){
        let note = {
            title : title,
            body : body
        }
        notes.push(note);
        saveNotes(notes);

        console.log(chalk.green.bold.inverse("< Note Added >"));
    }else{
        console.log(chalk.red.inverse("< Hey Don,t fuck around with same title >"));
    }

}

//removing notes function
const removeNote = (title)=>{
    let notes = loadNotes();
    let newNotes = notes.filter((el)=> el.title !== title);

    if(newNotes.length === notes.length) console.log(chalk.red.inverse(`< Hey cuz no title's matchin, to what u gav >`));
    else{
        saveNotes(newNotes);
        console.log(chalk.green.bold.inverse(`< Bruh, ur note's deleted >`));
    }
}

const listNodes = ()=>{
    let notes = loadNotes();
    console.log(chalk.green.inverse(`Your Notes`));
    notes.forEach(el => {
        console.log(`title :: ${el.title}`);
    });
}

//loading the notes
const loadNotes = ()=>{
    try{
        let data = fs.readFileSync("notes.json","utf8");
        let parsedData = JSON.parse(data);
        return parsedData;
    }
    catch(e){
        return [];
    }
}
//saving notes
const saveNotes = (notes)=>{
    let stringedData = JSON.stringify(notes);
    fs.writeFileSync("notes.json",stringedData);
}


//Exportin my functions to app.js >
module.exports = {
    addNotes : addNotes,
    removeNote : removeNote,
    listNodes : listNodes
}
const fs = require('fs');
const path = require('path');

function createNewNote(body, noteTaker) {
    const note = body;
    noteTaker.push(note);
    fs.writeFileSync(
        path.json(__dirname, "../db/db.json"),
        JSON.stringify(
          {
            notes: noteTaker,
          } ,
          null,
          2 
    )
    );
    return note;
        }

        function deleteNote(noteTaker, id) {
            let deleteID = parseInt(id);
            noteTaker.splice(deleteID, 1);
        
        
        for (let i = deleteID; i < noteTaker.length; i++) {
            noteTaker[i].id = i.toString();
        }
        
        fs.writeFileSync(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify({notes: noteTaker }, null, 2)
            );
        }

        module.exports = {
            createNewNote,
            deleteNote,
        };
    
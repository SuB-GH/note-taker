const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
    const zookeeper = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../data/db.json"),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

module.exports = {
    createNewNote,
};
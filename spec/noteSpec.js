let title = "Note title";
let content = "Note content, nice content";

let note = new Note(title, content);

console.log(expect(note.title).toEqual(title));
console.log(expect(note.content).toEqual(content));
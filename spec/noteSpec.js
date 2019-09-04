let title = "Note title";
let content = "Note content, nice content";

let note = new Note(title, content);

expect(note.title).toEqual(title);
expect(note.content).toEqual(content);
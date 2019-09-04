let title = "Note title";
let content = "Note content\nnice content";

let note = new Note(title, content);

console.log("#a note has a title and a content")

console.log(expect(note.title).toEqual(title));
console.log(expect(note.content).toEqual(content));

console.log("#trimmedTitle");
console.log(expect(note.trimmedTitle()).toEqual(title));

var title2 = "This a title which has 20 characters";
note = new Note(title2, content);
console.log(expect(note.trimmedTitle()).toEqual("This a title which h..."));

console.log("#readContentLines")
console.log(expect(note.readContentLines()).toEqual(["Note content", "nice content"]))
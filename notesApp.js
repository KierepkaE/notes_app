notes = ['This is our first note out of four notes',
  'This is our second note out of four notes',
  'This is our third note out of four notes',
  'This is our fourth note out of four notes',]



const HTML = notes.map(note => `<li  >${note.length > 20 ? note.substring(0, 20) : note}</li> `).join('');
document.getElementById("note").innerHTML = '<ul>' + HTML + '</ul>'
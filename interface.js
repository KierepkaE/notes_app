let notes = [];
let titles = []

const create_button = document.getElementById('add_note_button')
const note_value = document.getElementById('note_input')
const note_list = document.getElementById('note_list')
const display = document.getElementById('display')
const title_input = document.getElementById('title_input')

const createBtnClick = () => {
    if (title_input.value === '' || note_value.value === '') {
        throw new Error('This fields can not be empty')
        return
    }
    notes.push(note_value.value);
    titles.push(title_input.value);
    note_value.value = '';
    title_input.value = '';
    createListItem();
}

const trim = (string) => {
    return string.length > 20 ?
        `${string.slice(0, 20)} . . . ` :
        string
}

const createListItem = () => {
    clear_list();
    notes.map((note, index) => {
        let new_note = document.createElement('LI');
        new_note.textContent = trim(titles[index]);
        new_note.setAttribute("class", "list-item");
        new_note.setAttribute("id", `${index}`);
        new_note.setAttribute("onclick", `displayNote(${index})`);
        note_list.appendChild(new_note);
    });
}

const clear_list = () => {
    note_list.innerHTML = '';
}

const displayNote = (index) => {
    display.innerHTML = ''
    content = notes[index].split("\n");
    let i = 0;
    for (line of content) {
        let title_text = titles[i];
        let title = document.createElement('H4')
        title.textContent = title_text
        paragraph = document.createElement('P');
        paragraph.innerHTML = line;
        display.appendChild(title)
        display.appendChild(paragraph);
        i++;
    }
}
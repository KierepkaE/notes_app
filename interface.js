let notes = [];

const create_button = document.getElementById('add_note_button')
const note_value = document.getElementById('note_input')
const note_list = document.getElementById('note_list')
const display = document.getElementById('display')

const create_btn_click = () => {
    notes.push(note_value.value);
    note_value.value = '';
    createListItem();
}

const trim = (string) => {
    return string.length > 10 ?
        `${string.slice(0, 10)} . . . ` :
        string
}

const createListItem = () => {
    clear_list();
    notes.map((note, index) => {
        let new_note = document.createElement('LI');
        new_note.textContent = trim(note);
        new_note.setAttribute("class", "ListItem");
        new_note.setAttribute("id", `note${index}`);
        note_list.appendChild(new_note);
    });

}

const clear_list = () => {
    note_list.innerHTML = '';
}
const main_container = document.getElementById('container');

const Note = (title, description, priority) => {
	const getTitle = () => title;

	return{
		getTitle
	}
}

function displayNotes(project){
	const note_list_container = document.getElementById('note-list');
	while (note_list_container.firstChild) note_list_container.removeChild(note_list_container.firstChild);

	project.projectNoteList.forEach(note => {
		const newNote = document.createElement('div');
		newNote.className = "note";

		let spanText = document.createElement('span');
		spanText.className = "note-title project-text";
		spanText.textContent = note.getTitle();

		newNote.appendChild(spanText);
		note_list_container.appendChild(newNote);
	})

	updateNoteCount(project);
}

function updateNoteCount(project){
	const note_total_span = document.getElementById('note-total');
	note_total_span.textContent = `${project.projectNoteList.length} Notes`;
}

function loadNotePage(project){
	while(main_container.firstChild) main_container.removeChild(main_container.firstChild);

	const note_container = document.createElement('div');
	note_container.id = "notes-container";

	note_container.appendChild(loadNoteTopBar(project));

	const notes_list = document.createElement('div')
	notes_list.id = "note-list";

	note_container.appendChild(notes_list);

	main_container.appendChild(note_container);

	displayNotes(project);
}

function loadNoteTopBar(project){
	// [ 1 ] Create Top Bar Container
	const top_bar = document.createElement('div')
	top_bar.id = "notes-top-bar";

	// [ 1.5 ] Back Arrow
	const back_arrow = document.createElement('i');
	back_arrow.className = "fas fa-arrow-circle-left"
	back_arrow.addEventListener('click', function(){
		loadProjectPage();
	})
	top_bar.appendChild(back_arrow);

	// [ 2 ] Create Note Counter
	const note_count_container = document.createElement('div');
	note_count_container.id = 'note-count';

	const counter_span = document.createElement('span');
	counter_span.id = "note-total";
	counter_span.className = "project-text";
	counter_span.textContent = `${project.projectNoteList.length} Notes`;

	note_count_container.appendChild(counter_span);

	// [ 3 ] Create New Button
	const new_note_button = document.createElement('button');
	new_note_button.id = 'new-project-button';
	
	const button_i = document.createElement('i');
	button_i.className += "fas fa-folder-plus";

	const button_span = document.createElement('span');
	button_span.textContent = " New";

	new_note_button.appendChild(button_i);
	new_note_button.appendChild(button_span);


	// [ 4 ] Add Button Listener
	new_note_button.addEventListener('click', function(){
		// let newTitle = "";
		// while (newTitle === "")	newTitle = prompt('What is the Title of this note?');
		// let newDesc = "";
		// // while (newDesc === "")	newDesc = prompt('What is the Title of this note?');
		// project.projectNoteList.push(Note(newTitle, 'hello', 'low'));
		// displayNotes(project);
		openNoteCreator(project);
	})

	top_bar.appendChild(note_count_container);
	top_bar.appendChild(new_note_button);


	return top_bar;
}

function openNoteCreator(project){
	
}
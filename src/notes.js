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
	clearPage();

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
		openNoteCreator(project);
	})

	top_bar.appendChild(note_count_container);
	top_bar.appendChild(new_note_button);


	return top_bar;
}

function openNoteCreator(project){
	clearPage();
	const note_creator_container = document.createElement('div');
	note_creator_container.id = "note-creator";

	const titleLabel = document.createElement('div');
	titleLabel.textContent = "Title";
	const inputField = document.createElement('input');
	inputField.type = "text";

	const descLabel = document.createElement('div');
	descLabel.textContent = "Description";
	const descField = document.createElement('input');
	descField.type = "text";

	const priorLowLabel = document.createElement('div');
	priorLowLabel.textContent = "Low";
	const priorMedLabel = document.createElement('div');
	priorMedLabel.textContent = "Medium";
	const priorHighLabel = document.createElement('div');
	priorHighLabel.textContent = "High";

	const priorityLabel = document.createElement('div');
	priorityLabel.textContent = "Priority"
	const priorityFieldLow = document.createElement('input');
	priorityFieldLow.type = "radio";
	priorityFieldLow.name = "priority";
	const priorityFieldMed = document.createElement('input');
	priorityFieldMed.type = "radio";
	priorityFieldMed.name = "priority";
	const priorityFieldHigh = document.createElement('input');
	priorityFieldHigh.type = "radio";
	priorityFieldHigh.name = "priority";

	const submitButton = document.createElement('button');
	submitButton.id = "new-note-button";


	note_creator_container.appendChild(titleLabel);
	note_creator_container.appendChild(inputField);
	note_creator_container.appendChild(descLabel);
	note_creator_container.appendChild(descField);
	note_creator_container.appendChild(priorityLabel);
	note_creator_container.appendChild(priorLowLabel);
	note_creator_container.appendChild(priorityFieldLow);
	note_creator_container.appendChild(priorMedLabel);
	note_creator_container.appendChild(priorityFieldMed);
	note_creator_container.appendChild(priorHighLabel);
	note_creator_container.appendChild(priorityFieldHigh);
	note_creator_container.appendChild(submitButton);

	main_container.appendChild(note_creator_container);
}



function clearPage(){
	while (main_container.firstChild) main_container.removeChild(main_container.firstChild)
}
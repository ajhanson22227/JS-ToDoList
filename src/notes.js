const main_container = document.getElementById('container');

const Note = (title, description, priority) => {
	const getTitle = () => title;
	const getPriority = () => priority;

	return{
		getTitle,
		getPriority
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
		
		if (note.getPriority() == 'low'){
			newNote.style.backgroundColor = "#FFFACD";
		}
		else if (note.getPriority() == 'med'){
			newNote.style.backgroundColor = "#DAA520";
		}
		else{
			newNote.style.backgroundColor = "#DC143C";
		}
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

	note_creator_container.appendChild(getTitle());
	note_creator_container.appendChild(getDescription());
	note_creator_container.appendChild(getPriority());
	note_creator_container.appendChild(getNewNoteButton(project));

	main_container.appendChild(note_creator_container);
}

function getTitle(){
	const titleContainer = document.createElement('div');
	
	const titleLabel = document.createElement('div');
	titleLabel.textContent = "Title";
	const inputField = document.createElement('input');
	inputField.id = 'new-title-text';
	inputField.type = "text";
	
	titleContainer.appendChild(titleLabel);
	titleContainer.appendChild(inputField);
	
	return titleContainer;
}

function getDescription(){
	const descContainer = document.createElement('div');
	
	const descLabel = document.createElement('div');
	descLabel.textContent = "Description";
	const descField = document.createElement('input');
	descField.id = "new-description-text";
	descField.type = "text";
	
	descContainer.appendChild(descLabel);
	descContainer.appendChild(descField);
	
	return descContainer;
}

function getPriority(){
	
	// [ 1 ] Make Container
	const priorityContainer = document.createElement('div');
	priorityContainer.id = "priority-container";
	
	// [ 2 ] Make Title 
	const priorityTitleLabel = document.createElement('div');
	priorityTitleLabel.className = "priority-text";
	priorityTitleLabel.textContent = "Priority";
	
	// [ 3 ] Make Low Priority
	const lowPriorityDiv = document.createElement('div');
	lowPriorityDiv.className = "radio-container";
	
	const lowPriorityRadio = document.createElement('input');
	lowPriorityRadio.type = "radio";
	lowPriorityRadio.value = "low";
	lowPriorityRadio.name = "priority";
	lowPriorityRadio.checked = true;
	const lowPriorityLabel = document.createElement('div');
	lowPriorityLabel.textContent = "Low";
	
	lowPriorityDiv.appendChild(lowPriorityRadio);
	lowPriorityDiv.appendChild(lowPriorityLabel);
	
	// [ 4 ] Make Medium Priority
	const medPriorityDiv = document.createElement('div');
	medPriorityDiv.className = "radio-container";
	
	const medPriorityRadio = document.createElement('input');
	medPriorityRadio.type = "radio";
	medPriorityRadio.value = "med";
	medPriorityRadio.name = "priority";
	

	const medPriorityLabel = document.createElement('div');
	medPriorityLabel.textContent = "Medium";
	
	medPriorityDiv.appendChild(medPriorityRadio);
	medPriorityDiv.appendChild(medPriorityLabel);
	
	// [ 5 ] Make High Priority
	const highPriorityDiv = document.createElement('div');
	highPriorityDiv.className = "radio-container";
	
	const highPriorityRadio = document.createElement('input');
	highPriorityRadio.type = "radio";
	highPriorityRadio.value = "high";
	highPriorityRadio.name = "priority";
	
	const highPriorityLabel = document.createElement('div');
	highPriorityLabel.textContent = "High";
	
	highPriorityDiv.appendChild(highPriorityRadio);
	highPriorityDiv.appendChild(highPriorityLabel);
	
	// [ 6 ] Add All To Container
	priorityContainer.appendChild(priorityTitleLabel);
	priorityContainer.appendChild(lowPriorityDiv);
	priorityContainer.appendChild(medPriorityDiv);
	priorityContainer.appendChild(highPriorityDiv);
	
	return priorityContainer;
}

function getNewNoteButton(project){
	const newNoteButton = document.createElement('button');
	newNoteButton.id = "new-note-button";
	newNoteButton.textContent = "Add";
	
	newNoteButton.addEventListener('click', function(){
		addNewNote(project);
	});
	return newNoteButton;
}

function clearPage(){
	while (main_container.firstChild) main_container.removeChild(main_container.firstChild)
}

function addNewNote(project){
	const newTitle = document.getElementById('new-title-text');
	const newDesc = document.getElementById('new-description-text');
	
	if (newTitle.value == "" || newDesc.value == ""){
		alert("Cannot Leave Any Field Blank");
		return;
	}
	
	let newPriority = document.querySelector('input[name="priority"]:checked').value;
	console.log(`I got ${newPriority} as a value`);
	
	project.projectNoteList.push(Note(newTitle.value, newDesc.value, newPriority));
	loadNotePage(project);
}
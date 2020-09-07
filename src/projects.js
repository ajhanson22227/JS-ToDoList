let projects = [];
const Project = (title) => {
	//array to hold the projects todo notes
	let projectNoteList = [];

	const sayTitle = () => console.log(`This is project ${title}`);
	const getTitle = () => title;

	return{
		sayTitle,
		getTitle,
	}
}

projects.push(Project('Default 1'));
projects.push(Project('Default 2'));



function logProjects(){
	projects.forEach(proj => {
		console.log(proj.sayTitle());
	})
}

function displayProjects(){
	const project_list_container = document.getElementById('project-list');
	while (project_list_container.firstChild){
		project_list_container.removeChild(project_list_container.firstChild);
	}

	projects.forEach(proj => {

		let project = document.createElement('div');
		project.className = "project";

		let spanText = document.createElement('span');
		spanText.className = "project-title project-text";
		spanText.textContent = proj.getTitle();

		project.appendChild(spanText);
		project_list_container.appendChild(project);
	})

	updateProjectCount();
}

function updateProjectCount(){
	const project_total_span = document.getElementById('project-total');
	project_total_span.textContent = `${projects.length} Projects`;
}



function loadProjectPage(){
	const main = document.getElementById('container');

	const project_container = document.createElement('div');
	project_container.id = "project-container";
	project_container.appendChild(loadTopBar());

	const project_list = document.createElement('div')
	project_list.id = "project-list";

	project_container.appendChild(project_list);

	container.appendChild(project_container);
	displayProjects();
}

function loadTopBar(){

	// [ 1 ] Create Top Bar Container
	const top_bar = document.createElement('div')
	top_bar.id = 'project-top-bar';

	// [ 2 ] Create Project Counter
	const project_count_container = document.createElement('div');
	project_count_container.id = 'project-count';

	const counter_span = document.createElement('span');
	counter_span.id = "project-total";
	counter_span.className = "project-text";
	counter_span.textContent = `${projects.length} Projects`;

	project_count_container.appendChild(counter_span);


	// [ 3 ] Create New Button
	const new_project_button = document.createElement('button');
	new_project_button.id = 'new-project-button';
	
	const button_i = document.createElement('i');
	button_i.className += "fas fa-folder-plus";

	const button_span = document.createElement('span');
	button_span.textContent = " New";

	new_project_button.appendChild(button_i);
	new_project_button.appendChild(button_span);

	// [ 4 ] Add Button Listener
	new_project_button.addEventListener('click', function(){
		let newTitle = "";
		while (newTitle === "")	newTitle = prompt('What is the Title of this project?');
		projects.push(Project(newTitle));
		displayProjects();
	})
	
	top_bar.appendChild(project_count_container);
	top_bar.appendChild(new_project_button);

	return top_bar;
}

export default loadProjectPage;
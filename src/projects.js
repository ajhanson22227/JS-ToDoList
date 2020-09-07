let projects = [];
const newProjectButton = document.getElementById('new-project-button');

const Project = (title) => {
	//array to hold the projects todo notes
	let projectNoteList = [];

	const sayTitle = () => console.log(`This is project ${title}`);

	return{
		sayTitle,
	}
}

projects.push(Project('Default 1'));
projects.push(Project('Default 2'));
projects.push(Project('Default 3'));

newProjectButton.addEventListener('click', function(){
	let newTitle = prompt('What is the Title of this project?');
	projects.push(Project(newTitle));})

function logProjects(){
	projects.forEach(proj => {
		console.log(proj.sayTitle());
	})
}
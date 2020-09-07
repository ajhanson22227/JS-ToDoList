import loadProjectPage from './projects'

const main_container = document.getElementById('container');

function loadProject() {
	while (main_container.firstChild) main_container.removeChild(main_container.firstChild);
	loadProjectPage();
}

loadProject();
var tasks = [
	// Remove the headache inducing carousel
	() => { return hideBySelector('.carousel'); },
	// Remove the space eating, redundant footer
	() => { return hideBySelector('footer.ng-scope'); }
];

runNextTask();

function runNextTask() {

	if(tasks.length == 0) {
		return;
	}

	var task = tasks[0];
	var result = task();

	if(result) {
		tasks.splice(0, 1);
	}

	requestAnimationFrame(runNextTask);

}


/**
 * With some nodes it might be better to hide rather than removing, just in case events are associated to the node and things break subsequently
 */
function hideNode(node) {
	node.style.display = 'none';
}

function hideBySelector(sel) {
	var node = document.querySelector(sel);
	if(node) {
		hideNode(node);
		return true;
	}
	return false;
}

function removeNode(node) {
	var pare = node.parentNode;
	pare.removeChild(node);
}

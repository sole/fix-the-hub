var tasks = {
	// Remove the headache inducing carousel
	'carousel': () => { return hideBySelector('.carousel'); },
	// Remove the space eating, redundant footer
	'footer': () => { return hideBySelector('footer.ng-scope'); },
	// Same for the breadcrumbs
	'breadcrumbs': () => { return hideBySelector('.breadcrumbs-container'); },
};

var maxTime = 10000; // 10 seconds before giving up
var startTime = Date.now();
fixThings();
console.log('starting at', startTime);

function fixThings() {
	var keys = Object.keys(tasks);

	var num = keys.length;
	console.log('SOLE!', num);
	if(num == 0) {
		console.log('ALL DONE');
		return;
	}

	for(var i = 0; i < num; i++) {
		var k = keys[i];
		var task = tasks[k];
		var result = task();

		if(result) {
			delete(tasks[k]);
		}
	}

	var now = Date.now();
	if(now - startTime < maxTime) {
		requestAnimationFrame(fixThings);
	} else {
		console.log('giving up at', now);
	}
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
		console.log('found', node);
		hideNode(node);
		return true;
	}
	return false;
}

function removeNode(node) {
	var pare = node.parentNode;
	pare.removeChild(node);
}

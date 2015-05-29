function drawTrees() {
	
	var numberOfTrees = 100;
	var treeContainer = $('.object__forest')


	for (i = 0; i < numberOfTrees; i++) {
		var treeColor = Math.floor(Math.random()*(6-1+1)+1);
		var tree = $('<div class="object__tree color-' + treeColor + '""></div>')
    	treeContainer.append(tree);
	}
}

$(document).ready(function() {
	drawTrees();
});
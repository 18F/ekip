function drawTrees() {

	var windowWidth = $(window).width();
	
	var numberOfTrees = windowWidth * 0.015;
	console.log(numberOfTrees);

	var treeContainer = $('.ground')

	var treePositions = []

	for (i = 0; i < numberOfTrees; i++) {
		var treeColor = Math.floor(Math.random()*(6-1+1)+1);
		var treePositionLeft = Math.floor(Math.random()*(75)+1);

		var treePositionTop = Math.floor(Math.random()*(40)+9);

		var tree = $('<div class="object__tree color-' + treeColor + '" style="left:' + treePositionLeft + '%; top:' + treePositionTop + '%;"></div>')
    	treeContainer.append(tree);
	}
	console.log(treePositions);
}

$(document).ready(function() {

	drawTrees();

});
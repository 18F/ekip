$(document).ready(function() {

	var numberOfTrees = Math.floor(Math.random()*(40-25+1)+25);

	var treeContainer = $('.ground')

	for (i = 0; i < numberOfTrees; i++) {
		var treeColor = Math.floor(Math.random()*(6-1+1)+1);
		var treePositionLeft = Math.floor(Math.random()*(99)+1);
		var treePositionTop = Math.floor(Math.random()*(75)+5);

		var tree = $('<div class="object__tree color-' + treeColor + '" style="margin-left:' + treePositionLeft + '%; top:' + treePositionTop + '%;"></div>')
    	treeContainer.append(tree);
	}

});
function pickPrimers(){
	var data = readAndFOrmatData();
}

function readAndFormatData(){
	var inputs = document.getElementsByTagName('input');

	for (var i = 0; i < inputs.length; ++i) {
	    console.log(inputs[i].type);
	}

	textareas = document.getElementsByTagName('textarea');

	for (var i = 0; i < textareas.length; ++i) {
	    console.log(textareas[i]);
	}
}
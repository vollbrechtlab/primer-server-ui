function pickPrimers(){
	var data = readAndFormatData();
}

// read data from the form and format it
function readAndFormatData(){
	var inputs = document.getElementsByTagName('input');
	var formattedData = {};

	for (var i = 0; i < inputs.length; ++i) 
	{
	    if(inputs[i].type == 'checkboxa'){
	    	formattedData[inputs[i].name] = inputs[i].checked;
	    }
	    if(inputs[i].type == 'text'){
	    	if(isNumeric(inputs[i].value)){
	    		formattedData[inputs[i].name] = +inputs[i].value;
	    	} else {
	    		console.log(inputs[i].value);
	    		formattedData[inputs[i].name] = JSON.parse("[" + inputs[i].value + "]");
	    		console.log(formattedData[inputs[i].name]);
	    	}
	    }
	}

	var textareas = document.getElementsByTagName('textarea');

	for (var i = 0; i < textareas.length; ++i) {
	    console.log(textareas[i]);
	}

	console.log(formattedData);
}

function isNumeric(num){
    return !isNaN(num)
}
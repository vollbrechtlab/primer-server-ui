// When the primer checkboxes are changed
$(".pick_left_primer_check").click(pick_toggle);
$(".pick_internal_oligo_check").click(pick_toggle);
$(".pick_right_primer_check").click(pick_toggle);
function pick_toggle() 
{
    if($(this).is(":checked")) {
        $(".answer_" + this.className).hide();
        // reset the value
        $(".answer_" + this.className).children('input')[0].value = "";
    } else {
        $(".answer_" + this.className).show();
    }
}

var sequence_template = "";
var sequence_template_length = 0; 

// When the SEQUENCE_TEMPLATE is updated
$('#SEQUENCE_TEMPLATE').keyup(function(event) 
{
	sequence_template = $('#SEQUENCE_TEMPLATE').val();
	sequence_template_length = sequence_template.length;
    // update the PRIMER_PRODUCT_SIZE_MAX based on sequence length
    $('#PRIMER_PRODUCT_SIZE_MAX').val(sequence_template_length);
    // update the PRIMER_PRODUCT_SIZE_MIN based on sequence length
    $('#PRIMER_PRODUCT_SIZE_MIN').val(Math.floor(sequence_template_length/3));
});

// When PRIMER_PRODUCT_SIZE_MIN is changed
$('#PRIMER_PRODUCT_SIZE_MIN').on('input',function(e){
	if(!isNumeric($('#PRIMER_PRODUCT_SIZE_MIN').val())){
		setTimeout(function(){$('#PRIMER_PRODUCT_SIZE_MIN').val(Math.floor(sequence_template_length/3)); }, 500);
	}
});

// When PRIMER_PRODUCT_SIZE_MAX is changed
$('#PRIMER_PRODUCT_SIZE_MAX').on('input',function(e){
	if(!isNumeric($('#PRIMER_PRODUCT_SIZE_MAX').val())){
		setTimeout(function(){$('#PRIMER_PRODUCT_SIZE_MAX').val(sequence_template_length);}, 500);
	} else {
		var primer_product_size_max = +$('#PRIMER_PRODUCT_SIZE_MAX').val();
		var primer_product_size_min = +$('#PRIMER_PRODUCT_SIZE_MIN').val();
		if(primer_product_size_max < primer_product_size_min) {
			setTimeout(function(){$('#PRIMER_PRODUCT_SIZE_MAX').val($('#PRIMER_PRODUCT_SIZE_MIN').val());}, 500);
		} 
		else if(primer_product_size_max > sequence_template_length) {
			setTimeout(function(){$('#PRIMER_PRODUCT_SIZE_MAX').val(sequence_template_length);}, 500);
		}
	}
});

/**
 * Submit the data to the server 
 */
function submit()
{
	console.log("reading info");
	var data = readAndFormatData();
	console.log(data);
}

/**
 * Reset the form 
 */
function reset()
{
	console.log('clear');
}

/** 
 * read data from the form and format it 
 */
function readAndFormatData()
{
	var orgData = {};

	/* read input tags */
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; ++i) 
	{
	    if(inputs[i].type == 'checkbox'){
	    	orgData[inputs[i].id] = inputs[i].checked;
	    }
	    else if(inputs[i].type == 'text'){
	    	if(inputs[i].value != ""){
	    		if(isNumeric(inputs[i].value)){
		    		orgData[inputs[i].id] = +inputs[i].value;
		    	} else {
		    		orgData[inputs[i].id] = inputs[i].value;
		    	}
	    	}
	    }
	}

	/* read textarea tags */
	var textareas = document.getElementsByTagName('textarea');
	for (var i = 0; i < textareas.length; ++i) 
	{
		if(textareas[i].value != "") {
			orgData[textareas[i].id] = textareas[i].value;
		}
	}

	/* read textarea tags */
	var selects = document.getElementsByTagName('select');
	for (var i = 0; i < selects.length; ++i) 
	{
		if(isNumeric($("#" + selects[i].id + " option:selected").val())){
			orgData[selects[i].id] = +$("#" + selects[i].id + " option:selected").val();
		} else {
			orgData[selects[i].id] = $("#" + selects[i].id + " option:selected").val();
		}
	}

	/* format data step 1*/
	orgData['PRIMER_PRODUCT_SIZE_RANGE'] = [+orgData['PRIMER_PRODUCT_SIZE_MIN'],+orgData['PRIMER_PRODUCT_SIZE_MAX']];
	delete orgData['PRIMER_PRODUCT_SIZE_MIN'];
	delete orgData['PRIMER_PRODUCT_SIZE_MAX'];

	/* format data step 2*/
	data = {}
	data['send_this'] = {}
	data['extra'] = {}

	for (var key in orgData)
	{
		if(key.includes('SEQUENCE_') || key.includes('PRIMER_')){
			data['send_this'][key] = orgData[key];
		} else {
			data['extra'][key] = orgData[key];
		}
	}

	return data;	
}

function isNumeric(num){
    return !isNaN(num)
}
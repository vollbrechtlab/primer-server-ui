"""
Retrieve the parameter data from the manual html file
and save it as a csv file
"""

from bs4 import BeautifulSoup
import csv, json

source_html_file = open("./primer3-manual.html", "r")
source_html = source_html_file.read()
source_html_file.close()
soup = BeautifulSoup(source_html, "html.parser")

basic_params = [
	'SEQUENCE_TEMPLATE',
	'PRIMER_PICK_LEFT_PRIMER',
	'SEQUENCE_PRIMER_INPUT',
	'PRIMER_PICK_INTERNAL_OLIGO',
	'SEQUENCE_INTERNAL_OLIGO',
	'PRIMER_PICK_RIGHT_PRIMER',
	'SEQUENCE_PRIMER_REVCOMP',
	'PRIMER_PRODUCT_SIZE_RANGE',
	'SEQUENCE_TARGET',
	'SEQUENCE_EXCLUDED_REGION',
	'PRIMER_MIN_TM',
	'PRIMER_OPT_TM',
	'PRIMER_MAX_TM',
	'PRIMER_PAIR_MAX_DIFF_TM',
	'PRIMER_SALT_CORRECTIONS',
	'PRIMER_TM_FORMULA'
]
def check_basic_param(param_name):
	for p in basic_params:
		if p in param_name:
			return True
	return False

params = []
params.append(["name","description","type","default_value","setting_type", "form_type"])
for tag in soup.find_all("h3"):
	atag = tag.find("a")
	try:
		if ";" in atag.text and not "P3_" in atag.text:
			# get the type and default value string
			param_type_default_val = atag.text.split('(')[1]
			param_type_default_val = param_type_default_val.replace(')', '')
			param_type_default_val = param_type_default_val.replace('default', '')
			param_type_default_val = param_type_default_val.split(';')

			# get the parameter type
			param_type = param_type_default_val[0]

			# get the default value
			param_default_val = param_type_default_val[1]

			# fix some values
			if "decimal" in param_type:
				param_type = "decimal"
			if "float" in param_type:
				param_type = "float"
			if "empty" in param_default_val:
				param_default_val = ""

			# get the parameter name
			param_name = str(atag["name"])

			# define the form type
			form_type = "input_text"
			if param_name == "SEQUENCE_TEMPLATE":
				form_type = "textarea"
			elif param_type == "int" or param_type == "float" or param_type == "decimal":
				form_type = "input_number"
			elif param_type == "boolean":
				form_type = "checkbox"

			# get the parameter description
			param_description = ""
			param_description_tag = tag.find_next_sibling()
			while(param_description_tag.name != "h3"):
				param_description += param_description_tag.text
				param_description_tag = param_description_tag.find_next_sibling()

			# define the setting type
			setting_type = "additional"
			if check_basic_param(param_name):
				setting_type = "basic"

			params.append([param_name, param_description, param_type, param_default_val, setting_type, form_type])
	except:
		pass

with open("param_info.csv", 'w') as dest_csv:
	wr = csv.writer(dest_csv)
	wr.writerows(params)

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
params.append(["name","description","type","default_value","setting_type"])
for tag in soup.find_all("h3"):
	atag = tag.find("a")
	try:
		if ";" in atag.text and not "P3_" in atag.text:
			param_type_default_val = atag.text.split('(')[1]
			param_type_default_val = param_type_default_val.replace(')', '')
			param_type_default_val = param_type_default_val.replace('default', '')
			#param_type_default_val = param_type_default_val.replace(' ', '')
			param_type_default_val = param_type_default_val.split(';')

			param_type = param_type_default_val[0]
			param_default_val = param_type_default_val[1]

			if "decimal" in param_type:
				param_type = "decimal"

			if "empty" in param_default_val:
				param_default_val = ""

			param_name = str(atag["name"])

			param_description = ""
			param_description_tag = tag.find_next_sibling()
			while(param_description_tag.name != "h3"):
				param_description += param_description_tag.text
				param_description_tag = param_description_tag.find_next_sibling()

			if check_basic_param(param_name):
				params.append([param_name, param_description, param_type, param_default_val, "basic"])
			else:
				params.append([param_name, param_description, param_type, param_default_val, "additional"])
	except:
		pass

with open("param_info_org.csv", 'w') as dest_csv:
	wr = csv.writer(dest_csv)
	wr.writerows(params)

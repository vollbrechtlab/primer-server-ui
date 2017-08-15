from bs4 import BeautifulSoup
import csv, json

source_html_file = open("./primer3-manual.html", "r")
source_html = source_html_file.read()
source_html_file.close()
soup = BeautifulSoup(source_html, "html.parser")

"""
param_names = ""
for tag in soup.find_all("h3"):
	atag = tag.find("a")
	try:
		param_names += str(atag["name"]) + "\n"
	except:
		pass
"""

"""
param_desciprions = []
for tag in soup.find_all("p"):
	param_desciprions.append(str(tag))
print(param_desciprions[30])
"""

#destination_txt = open("param_info.txt","w")
#destination_txt.write(param_names)
#destination_txt.close()
#source_html.close()

"""
tag = soup.find("h3")
print(tag)
tag = tag.find_next_sibling()
print(tag)
tag = tag.find_next_sibling()
print(tag)
tag = tag.find_next_sibling()
print(tag)
tag = tag.find_next_sibling()
print(tag)
"""

params = []
params.append(["param_name","description","type","default_value"])
for tag in soup.find_all("h3"):
	atag = tag.find("a")
	try:
		if(";" in atag.text):
			param_type_default_val = atag.text.split('(')[1]
			param_type_default_val = param_type_default_val.replace(')', '')
			param_type_default_val = param_type_default_val.replace('default', '')
			#param_type_default_val = param_type_default_val.replace(' ', '')
			param_type_default_val = param_type_default_val.split(';')

			param_type = param_type_default_val[0]
			param_default_val = param_type_default_val[1]

			if "empty" in param_default_val:
				param_default_val = ""

			param_name = str(atag["name"])

			param_description = ""
			param_description_tag = tag.find_next_sibling()
			while(param_description_tag.name != "h3"):
				param_description += param_description_tag.text
				param_description_tag = param_description_tag.find_next_sibling()

			params.append([param_name, param_description, param_type, param_default_val])
	except:
		pass
#print(params[2])

#params_string = "param_name,description,type,default_value\n"
#for p in params:
#	params_string += p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "\n"

#destination_txt = open("param_info.csv","w")
#destination_txt.write(params_string)
#destination_txt.close()

#json_string = json.dumps(params)
#print(json_string)

with open("param_info.csv", 'w') as dest_csv:
	wr = csv.writer(dest_csv)
	wr.writerows(params)
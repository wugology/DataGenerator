document.addEventListener('DOMContentLoaded', function(){

var button = document.querySelector('button');

var USstates = ['AL','AK','AS','AZ','CA','CO','CT','DE',
'DC','FL','GA','HI','ID','IL','IN','IA','KS','KY',
'LA','ME','MD','MA','MI','MN','MS','MO','MT','NE',
'NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR',
'PA','RI','SC','SD','TN','TX','UT','VT','VA','WA',
'WV','WI','WY']
// an array of US states, for random generation
// if we need other JSON, PHP formats, see: 
// https://gist.github.com/mshafrir/2646763

var firstNames = ['Amit','Abhishek','Rahul','Ashish','Michael',
'Mary','Patricia','Linda','James','John']
var lastNames = ['Kumar','Singh','Gupta','Sharma','Reddy',
'Smith','Johnson','Williams','Brown','Jones']

// [0:4] are most common student names in MapR Academy 
// [5:9] and most common names in US 
// if we need more names, take from: https://en.wikipedia.org/wiki/List_of_placeholder_names_by_language


button.addEventListener('click', function(ev){
   var rowNum = document.querySelector('input.numRow').value;
   var colNum = document.querySelector('input.numCol').value;
   var colNames = document.querySelector('input.colNames').value;


// for (var i = 0; i < colNum; ++i) {
//     take number of columns, and repeat "select.dropdown" colNum times
//     var colType+i = document.querySelector('select.dropdown+i').value;
// }
// issues: varname+i and dropdown+i doesn't work. see stack overflow below:
// http://stackoverflow.com/questions/8260156/how-do-i-create-dynamic-variable-names-inside-a-loop

// if (colType == "date") {
// ask for a date range
// generate dates incrementally in that range, up to rowNum dates
// }

// if (colType == "state") {
// pick randomly from USstates, up to rowNum times
// }

// if (colType == "first") {
// pick randomly from firstNames, up to rowNum times
// }

// if (colType == "last") {
// pick randomly from lastNames, up to rowNum times
// }

// if (colType == "number") {
// ask for a starting number 
// generate integers incrementally from that start, up to rowNum numbers
// }

// if (colType == "random") {
// ask for a number range
// generate integers randomly in that range, up to rowNum numbers
// }

	console.log(colNum);
	console.log(rowNum);
	console.log(colNames);
	// the above three lines just test to see if input is working
	// this can be deleted from final app

	var field = document.querySelector('#field')
    field.innerHTML = '';
    //make a table of colNum columns and rowNum rows in the field
    //break up the text from colNames by commas, name the columns appropriately
    //fill the table with random data, based on column types above
})

})

// download and save table to CSV: 
// https://jsfiddle.net/terryyounghk/kpegu/
// https://www.raymondcamden.com/2014/04/03/Dynamically-Creating-CSV-Files-on-the-Client/
// http://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/
// http://blog.eliacontini.info/post/79860720828/export-to-csv-using-javascript-and-the-download
// https://adilapapaya.wordpress.com/2013/11/15/exporting-data-from-a-web-browser-to-a-csv-file-using-javascript/


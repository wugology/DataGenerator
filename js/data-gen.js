document.addEventListener('DOMContentLoaded', function(){

var button = document.querySelector('button');
var rowNum = document.querySelector('input.numRow').value;
var colNum = document.querySelector('input.numCol').value;
var text = document.querySelector('input.othertext').value;

button.addEventListener('click', function(ev){
	console.log(colNum);
	console.log(rowNum);
	console.log("is this working?");
	console.log(text);
	var field = document.querySelector('#field')
   field.innerHTML = text;
})

})



// save table to CSV links: 
// https://jsfiddle.net/terryyounghk/kpegu/
// https://www.raymondcamden.com/2014/04/03/Dynamically-Creating-CSV-Files-on-the-Client/
// http://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/
// http://blog.eliacontini.info/post/79860720828/export-to-csv-using-javascript-and-the-download
// https://adilapapaya.wordpress.com/2013/11/15/exporting-data-from-a-web-browser-to-a-csv-file-using-javascript/


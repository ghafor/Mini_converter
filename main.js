
function convertToC(){
	var myinput=document.getElementById('mytext').value;
	var c=5/9*(myinput-32);
	document.getElementById("result-text").innerHTML=c;

	
}

function convertToF(){
	var input=document.getElementById('mytext').value;
	var f=9/5*input+32;
	document.getElementById("result-text").innerHTML=f;

}

function reset(){
	document.getElementById('mytext').value="";
	document.getElementById("result-text").innerHTML="";

}



function store(){


  	var item = document.getElementById("result-text").innerHTML;
  	var newItem = parseFloat(item);

  	arr.push(newItem);
  	

}
var arr=[];
function retrive(){
	var thisNum = arr[arr.length-1];
	document.getElementById('mytext').value=thisNum;
}

function delet(){
	var i=	document.getElementById('mytext').value;
	var newText="";
	for(var j=0;j<i.length-1;j++){
		newText+=i[j]
	}
	document.getElementById('mytext').value=newText;

}


let Needarr = "";
let Havearr = "";


function need() {
	/*	var x = document.getElementById('txt').value;
		if(Needarr.length === 0){
			Needarr = Needarr + x;
		}
		else
		{
			Needarr = Needarr + ", " + x;
		}
		document.getElementById('list').innerHTML = `<li> ${Needarr} </li>`;
	*/
	    var x = document.getElementById('txt').value;
	    listNode = document.getElementById('list'),
		liNode = document.createElement("LI"),
		txtNode = document.createTextNode(x);
	    liNode.appendChild(txtNode);
	    listNode.appendChild(liNode);
}

function have() {
	/*
	var x = document.getElementById('txt').value;
	if(Havearr.length === 0){
		Havearr = Havearr + x;
	}else{
		Havearr = Havearr + ", " + x;
	}
	document.getElementById('list1').innerHTML = `<li> ${Havearr} </li>`;
*/
	    var x = document.getElementById('txt').value;
	    listNode = document.getElementById('list1'),
		liNode = document.createElement("LI"),
		txtNode = document.createTextNode(x);
	    liNode.appendChild(txtNode);
	    listNode.appendChild(liNode);
}

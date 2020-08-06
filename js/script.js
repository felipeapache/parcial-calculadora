document.getElementById("n1").addEventListener("click",n1);
function n1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n2").addEventListener("click",n2);
function n2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n3").addEventListener("click",n3);
function n3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n3").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n4").addEventListener("click",n4);
function n4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n5").addEventListener("click",n5);
function n5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n6").addEventListener("click",n6);
function n6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n7").addEventListener("click",n7);
function n7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n8").addEventListener("click",n8);
function n8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n9").addEventListener("click",n9);
function n9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("n0").addEventListener("click",n0);
function n0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("s").addEventListener("click",o1);
function o1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("s").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("r").addEventListener("click",o2);
function o2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("r").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("d").addEventListener("click",o3);
function o3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("d").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
document.getElementById("m").addEventListener("click",o4);
function o4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("m").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
}
document.getElementById("ce").addEventListener("click", ce);
function ce() {
	document.getElementById('resultado').innerHTML = null;
}
document.getElementById("sr").addEventListener("click",showResult);
function showResult() {
	let actual = document.getElementById('resultado').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("÷");
	let mult = actual.indexOf("x");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (div !== -1) {
		arr = actual.split("÷",2);
		res = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	}
}
function shortcut(s1, s2) {
  // your code here
	let string1=s1[0];
	let string2=s2[0];
	if(string1===" " || string2===" "){
		return " ";
	}
	let result=string1+string2;
	return result;
	
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));

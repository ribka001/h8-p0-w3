function balikString(string) {
var reverse = "";
for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
	}
return reverse;
}

// TEST CASES
console.log(balikString("hello world!")); 
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){
input.splice(1, 1, "Roman Alamsyah Elsharawy")
input.splice(2, 1, "Provinsi Bandar Lampung")
input.splice(4, 1, "Pria", "SMA Internasional Metro")
return input};

console.log(dataHandling2(input));

var newArr = dataHandling2(input);

var birthday = input[3].split("/");
var fullBirthday = input[3].split("/").join("-");
var month = birthday[1]

switch(month){
	case '01':
		console.log(" January ");
		break;
	case '02':
		console.log(" February ");
		break;
	case '03':
		console.log(" March ");
		break;
  case '04':
		console.log(" April ");
		break;
  case '05':
		console.log(" May ");
		break;
  case '06':
		console.log(" June ");
		break;
  case '07':
		console.log(" July ");
		break;
  case '08':
		console.log(" August ");
		break;
  case '09':
		console.log(" September ");
		break;
  case '10':
		console.log(" October ");
		break;
  case '11':
		console.log(" November ");
		break;
  default:
	console.log(" December ");
		break;

}

birthday.sort(function(value1, value2) { return value2 - value1 });
console.log(birthday);

console.log(fullBirthday);

var name = newArr[1]
var irisan1 = name.slice(0,15);
console.log(irisan1);

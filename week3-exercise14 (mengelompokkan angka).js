function mengelompokkanAngka(arr) {
  var newArr = [];
  var even = [];
  var odd = [];
  var multiply3 = [];
  for(var  i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0){
      multiply3.push(arr[i])
    } else if(arr[i] % 2 !== 0){
      odd.push(arr[i])
    } else if(arr[i] % 2 === 0){
      even.push(arr[i])
    }
  }
  newArr.push(even)
  newArr.push(odd)
  newArr.push(multiply3)
  return newArr
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]





//  CARA LAIN
//
//  function mengelompokkanAngka(arr) {
//   var hasil = [ [], [], [] ]
//   var i = 0;
//   while (i < arr.length){
//     if(arr[i] % 3 === 0){
//       hasil[2].push(arr[i])
//     }else if (arr[i] % 2 !== 0){
//       hasil[1].push(arr[i])
//     }else if (arr[i] % 2 === 0){
//       hasil[0].push(arr[i])
//     }
//     i++
//   }
//   return hasil
// }
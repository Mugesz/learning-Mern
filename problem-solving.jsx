// patterns in array format

let row = "5";
for (let i = 1; i <= row; i++) {
  let arr = [];
  for (let j = 1; j <= i; j++) {
    arr.push(j);
  }
  console.log(arr);
}

// patterns in obj format

let rows = "5";
for (let i = 1; i <= rows; i++) {
  let arr = "";
  for (let j = 1; j <= rows - i + 1; j++) {
    arr += "*";
  }
  console.log(arr);
}

// patterns to form with X shape

let y = 5;
for (let i = 1; i <= y * 2; i++) {
  let arr = [];
  for (let j = 1; j < y * 2; j++) {
    if (i == j || j == y + y - i) {
      arr.push(i);
    }
    arr.push(" ");
  }
  console.log(arr.join(""));
}

// 1        1 
//  2      2  
//   3    3   
//    4  4    
//     5     
//    6  6    
//   7    7   
//  8      8  
// 9        9 

// odd even
let x = 3;
if (x % 2 == 0) {
  console.log("The number" + " " + x + " " + "Which is even");
} else {
  console.log("The number" + " " + x + " " + "Which is odd");
}

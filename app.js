// 과제 1

let a = 1;
let b = 2;

console.log(a, b);

let c = a;
a = b
b = c;
console.log(a, b);


//과제 2

console.log(20 + 30);//number, 50
console.log("20" + "30");//string, 2030
console.log("Hello" + " " + 2021);//string, Hello 2021
console.log(1 + 2 * 3);//number, 7
console.log((1 + 3) ** 2);//number, 16
console.log(1 / 0)//number, 무한대(Infinity)
console.log(6 % 2)//number, 0
console.log(7.5 % 2)//number, 1.5
console.log(5 == 5)//boolean, true
console.log(5 === 5)//boolean, true
console.log(5 == "5")//boolean, true
console.log(5 === "5")//boolean, false
console.log(5 != 5.0)//boolean, false
console.log(5 !== 5.0)//boolean, false
console.log("true" === true)//boolean, false
console.log(5 <= 5.0)//boolean, true
console.log(5 >= 5)//boolean, true
console.log(true || true)//boolean, true
console.log(true || false)//boolean, true
console.log(true && true)//boolean, true
console.log(true && false)//boolean, false
console.log(!true)//boolean, false
console.log(!false)//boolean, true

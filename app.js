// "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
function greet(firstName, lastName){
  console.log("안녕 내이름은",firstName,lastName,"이야")
}

greet("김", "병준")

// meetAt 함수를 만들어주세요.
function meetAt(year, month, day){
  if(year&&month&&day){
    return console.log(`${year}/${month}/${day}`)
  }
  else if(year&&month){
    return console.log(`${year}년 ${month}월`)
  }
  else if (year){
    return console.log(`${year}년`)
  }
}
meetAt(2025,9,1)


// findSmallestElement 함수를 구현해 주세요.
function findSmallestElement(arr){
  if (arr.length == 0){
    return 0
  }

  let min = arr[0];

  for (let i = 1; i<arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;

}
const items = [4,1,2]
console.log(findSmallestElement(items));







// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
function integerDivide(dividend) {
  let quotient1 = 0;
  
  let remainder = dividend;

  // 나머지가 divisor 이상인 동안 뺄셈 반복
  while (remainder >= 50000) {
    remainder -= 50000;
    quotient1++;
  }


  let quotient2 = 0;

  while (remainder >= 10000) {
    remainder -= 10000;
    quotient2++;
  }

  let quotient3 = 0;

  while (remainder >= 5000) {
    remainder -= 5000;
    quotient3++;
  }

  let quotient4 = 0;

  while (remainder >= 1000) {
    remainder -= 1000;
    quotient4++;
  }

  let quotient5 = 0;

  while (remainder >= 500) {
    remainder -= 500;
    quotient5++;
  }

  let quotient6 = 0;

  while (remainder >= 100) {
    remainder -= 100;
    quotient6++;
  }

  console.log(`50000 x ${quotient1}`);
  console.log(`10000 x ${quotient2}`);
  console.log(`5000  x ${quotient3}`);
  console.log(`1000  x ${quotient4}`);
  console.log(`500 x ${quotient5}`);
  console.log(`100  x ${quotient6}`);
}
integerDivide(1800);
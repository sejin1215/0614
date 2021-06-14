// console.log("Hello,World!");

// let a = 10;                              자동으로 변수 인지
// console.log(a);                  

// let a = 10;
// console.log(`a의 값은 ${a} 입니다.`);       js에서 지원하는 백틱(`)문자열은 변수를 집어 넣어 쓸 수 있다.

// js의 배열은 한 배열에 타입 상관없이 아무거나 다 들어간다.
// let arr = []; 배열 선언
// arr.push(1);     배열에 값 넣기
// arr.push("asdf");

// console.log(`arr: ${arr}`);

// let person = {};    
// person.name = "강현구";
// person.age = 19;
// console.log(person);

// let person = {
//     name: "강현구",
//     age: 19
// };

// console.log(person);

// let a = 1;
// let b = "1";

// if(a == b){                         //값만 검사
//     console.log(`a와 b는 같다`)
// }

// if(a === b){                        //값과 타입까지 검사
//     console.log(`a와 b는 값과 타입이 같다.`)
// }

// let arr = [1,2,3,4,5];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

let arr = [1,2,3,4,5];

for(let i in arr){
    console.log(arr[i]);
}
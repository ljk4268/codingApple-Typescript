interface LengthCheck {
  length : number
}

function 함수<MyType extends LengthCheck>(x: MyType){
  return x.length
}
let a = 함수<string>('100')

// 숙제1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 

function 함수2<Type extends string | string[]>(x :Type){
  console.log(x.length);
}

함수2<string>('hello')
함수2<string[]>(['hello','kim'])

// 숙제 2. Animal 이라는 타입이 있습니다.

interface Animal {
  name : string;
  age : number 
}

let data = '{"name" : "dog", "age" : 1 }'

function 함수3<Type>(x :string) :Type {
  return JSON.parse(x);
}
let result = 함수3<Animal>(data)
console.log(result)
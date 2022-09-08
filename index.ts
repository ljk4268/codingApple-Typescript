// 변수에 타입지정이 가능하다. 
let 이름 : string = 'kim';

// 이 변수에는 문자열로 된 배열만 들어올 수 있다. 라는 의미.
let 이름배열 : string[] = ['kim','park']

// name? : 물음표의 의미는 name속성이 옵션이라는 뜻. 
let 이름오브젝트 : {name? : string} = { name : 'kim' }


// 타입저장하는 방법
type Mytype = string | number;

// 문자열 혹은 숫자가 들어올 수 있다! : |
let newName : Mytype = 123;



// 함수의 타입지정
// 파라미터로 number : 함수( x : number )
// 리턴값으로 number : 함수( x : number ) : number
function 함수( x : number ) : number{
  return x * 2
}

// array에 쓸 수 있는 tuple타입
type Member = [number, boolean];
let john:Member = [123, true];

// object에 타입지정해야할 속성이 너무 많으면
// 글자로된 모든 object 속성의 타입은 : string
type Member1 = {
  [key : string ] : string
}
let min : Member1 = {name : 'kim', age : '123'}


class User {
  name : string;
  constructor(name : string){
    this.name = name;
  }
}
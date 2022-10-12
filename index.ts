// type 키워드로 변수를 만드는 것 : type alias
// type변수 작명 관습 : 영어 대문자로 시작. || 변수명 + Type

// type Animal = string | number | undefined;

// let 동물 : Animal = 123;
type AinmalType = {name : string, age : number}

let 동물 : AinmalType = {name : 'kim', age: 20}

// typescript 쓰면 object 자료 수정을 막을 수 있다. 
// readonly : 읽기전용

type Girlfriend = {
  name? : string
}
const 여친 : Girlfriend = {
  name : '엠버'
}

//type 변수
// union type으로 합치기

type Name = string;
type Age = number;
type Person = Name | Age





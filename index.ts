// interface Person {
//   age :number,
//   name :string
// }

// type PersonKeys = keyof Person;
// let a :PersonKeys = 'name'

// let obj = {name : 'kim', age: 20}
// Object.keys(obj)


type Car = {
  color :boolean,
  model :boolean,
  price :boolean | number
}


type TypeChanger<MyType> = {
  [key in keyof MyType] :string
}

type 새로운타입 = TypeChanger<Car>


// (숙제1) 다음 타입을 변환기를 돌려보십시오.

type Bus = {
  color : string,
  model : boolean,
  price : number
}

type TypeChanger2<MyType>{
  [key in keyof MyType] :string|number
}

type newBusType = TypeChanger2<Bus>

//(숙제2) 이런 변환기는 어떻게 만들어야할까요?
//내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 

type TypeChanger3 <MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = TypeChanger3<Bus, boolean>;
type NewBus2 = TypeChanger3<Bus, string[]>
// null & undefinde 타입체크하는 경우가 많다. 
// && 연산자로 null & undefinde 타입체크하기 
function 함수(a :string | undefined){
  if ( a && typeof a === 'string' ){
    // a가 undefined면 if문 실행이 안되고
    // a가 string이면 if문이 실행된다.
  }
}



type Fish = { swim: string };
type Bird = { fly: string };
function 함수2(animal: Fish | Bird) {
  if ('swim' in animal){

  }
}

type Car = {
  wheel : '4개',
  color : string
}
type Bike = {
  wheel : '2개',
  color : string
}

function 함수3(x : Car | Bike){
  if ( x.wheel === '4개' ){
    console.log('x는 Car타입이에요')
  }
}
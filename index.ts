//대표적인 narrowing 방법 = typeof연산자
// 어떤 변수가 타입이 아직 불확실하면 if문 등으로 narrowing해줘야한다. 
function 내함수(x: number | string){
  if ( typeof x === 'string' ){
    return x + '1'
  } else {
    return x + 1
  }
}

function 다른함수(x: number | string){
  let array : number[] = [];
  if( typeof x === 'number'){
    array[0] = x;
  }
}

// narrowing 문법 아니면 assertion문법(타입 덮어쓰기)
//assertion문법의 용도 
// 1. narrowing할 때 씁니다.
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓴다.
function 또다른함수(x: number | string){
  let array : number[] = [];
  array[0] = x as number; //왼쪽에 있는 변수를 number로 덮어주세요 라는 의미. 
}

// 숙제1. 
function 클리닝함수(x: (number|string)[]){
  console.log(x)
  let result : number [] =[];
  x.forEach(x => {
    if ( typeof x === "string"){
      result.push(Number(x))
    } else {
      result.push(x)
    }
  })

  console.log(result)
}
클리닝함수(['1',2,'3'])

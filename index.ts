// tupletype
// 자료의 순서, 위치를 지정하는 타입

let dog :[string, boolean]= ['dog', true];

// array 만들 때 자료의 순서, 위치까지 다 설정해서 타입을 지정하고 싶을 때 쓰면 됨.
// tuple 안에 옵션표시 가능
// 물음표는 맨 뒤에서부터 적용시켜야한다.
// let dog :[string, boolean?]= ['dog', true];



// 함수에서 쓰는 tuple
function 함수(...x :[number,string]){

}



//array합칠 때
//spread연산자 쓸 때 타입지정은 ...을 똑같이 써주면 된다! 
let arr = [1,2,3];
let arr2 :[number,number,...number[]]= [4,5,...arr]

// (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오

let food :[string,number,boolean]= ['coffee', 5500, true];

//(숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

let arr1 :[string,number,...boolean[]]= ['동서녹차', 4000, true, false, true, true, false, true]

// or

type Arr = [string,number,...boolean[]]
let arr3 :Arr = ['동서녹차', 4000, true, false, true, true, false, true]



// (숙제3) 함수에 타입지정을 해보도록 합시다.


function 함수2(...x :[string, boolean, ...(number|string)[]] ){
  
}


//숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
//파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
function solution(...x :(string | number)[]){

  let result :[string[],number[]] = [[],[]]

  x.forEach(element =>{
    if ( typeof element === 'string'){
      result[0].push(element);
    } else {
      result[1].push(element)
    }
  })

}
solution('b', 5, 6, 8, 'a')



// 함수 type alias 부착하려면 함수표현식 써야한다. 

type 함수타입 = (a:string) => number;

let 함수: 함수타입 = function (){


}


// 

let 회원정보 = {
  name : 'kim',
  plusOne(a){
    return a + 1
  }
}

회원정보.plusOne()

//콜백함수 

function 함수1(a){
  

}

function 함수2(){

  
}

함수1(함수2)
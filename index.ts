interface Square {color :string, width :number}

let square :Square = {
  color : 'red',
  width : 100
}

//interface는 extends로 복사가 가능하다. 

interface Student {name :string}
interface Teacher extends Student {
  age :number
}

type Animal = { name :string }
type Cat = { age :number } & Animal



let student :Student = {
  name : 'kim'
}
let teacher :Cat = {
  name : 'kim',
  age : 20
}

//숙제1
interface Product {
  brand :string,
  serialNumber :number,
  model :string[]
}

let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

//숙제2
interface ShoppingBasket  {
  product :string,
  price :number
}

interface Card extends ShoppingBasket {
  card :boolean
}
let 장바구니 :ShoppingBasket[]= [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 


interface MathObj {
  plus : (a:number, b:number) => number,
  minus : (a:number, b:number) => number
}

let 오브젝트 :MathObj = {
  plus(a,b){
    return a + b
  },
  minus(a,b){
    return a - b
  }
} 


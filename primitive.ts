let firstname: string = 'kim';
// let age: number = 32;
let marrid: boolean = false;

let member: string[] = ['kim', 'park']
let members: {member1:string, member2:string} = {member1:'kim', member2:'park' }


let membersname = 'park'     

//문제
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 

let myName = 'leejakyoung';
let myage = 32;
let placeofbirth = 'seoul'

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let myfavoriteMusic: {title: string; artist: string} = { title: '아무노래', artist: '지코'}

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.

let project : {
  member : string[],
  days : number,
  started : boolean,
}= {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}


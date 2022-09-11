// Union Type : 타입 2개 이상 합친 새로운 타입
let 회원 : number | string = 'kim';


// 숫자 or 문자가 가능한 array / object 타입지정
let 회원들 : (number|string)[] = [1,2,3];
let 오브젝트 : { a : string | number }= { a : 123 }

// any 타입 : 모든 자료형 허용해줌
// 그럼 타입스크립트 쓰는 이융가 없음. >> 타입실드 해제문법임.
let 이름 : any;
// 이름 = 123;
// 이름 = true;
이름 = [];


// unknown 타입 : any타입과 비슷하게 모든 자료형을 허용해줌
// any보다 안전한 이유는 unknown일지라도 타입이 다른경우 연산을 해주지 않음. 
// 정확한 타입끼리의 연산만 허락해줌. 
let 이름임 : unknown;
이름임 = 123;
이름임 = {};


// 아래와 같은 상황일 때 any는 버그를 잡아주지 않지만 
// unknown은 버그를 잡아준다.
// let 변수1 : string = 이름임;

// 타입이 맞는데 연산이 안되는 경우 
// string타입에 + 1은 허용 
// number타입에 + 1은 허용 
// string | number 타입에 + 1은 비허용 : string 또는 number 타입이기때문에 확정적으로 타입을 지정한게 아니니까! 
let 나이 : string | number;


let user : string = 'kim';
let age1 : unknown = undefined;
let marrid1 : boolean = false;
let 철수 : unknown = [user, age1, marrid1]
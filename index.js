// 변수에 타입지정이 가능하다. 
var 이름 = 'kim';
// 이 변수에는 문자열로 된 배열만 들어올 수 있다. 라는 의미.
var 이름배열 = ['kim', 'park'];
// name? : 물음표의 의미는 name속성이 옵션이라는 뜻. 
var 이름오브젝트 = { name: 'kim' };
// 문자열 혹은 숫자가 들어올 수 있다! : |
var newName = 123;
// 함수의 타입지정
// 파라미터로 number : 함수( x : number )
// 리턴값으로 number : 함수( x : number ) : number
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var min = { name: 'kim', age: '123' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());

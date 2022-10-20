// 점 3개 붙이면 무제한 파라미터가 들어올 수 있다는 의미. 
// 다른 파라미터가 있으면 맨 뒤에 사용해야 한다. 
function 함수(...rest) {
    console.log(rest);
}
함수(1, 5, 3, 6, 6);
// destructurin 개념설명
let { student, age } = { student: true, age: 20 };
let 오브젝트 = { student: true, age: 20 };
function 함수1({ student, age }) {
    console.log(student, age);
}
함수1({ student: true, age: 20 });
// 숙제 1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
function solution(...num) {
    let result = 0;
    num.forEach((element) => {
        if (result < element) {
            result = element;
        }
    });
    console.log(result);
}
solution(6, 3, 7, 2);
function solution2({ user, comment, admin }) {
}
solution2({ user: 'kim', comment: [3, 5, 4], admin: false });
function solution3([a, b, c]) {
}
solution3([40, 'wine', false]);

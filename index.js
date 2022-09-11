// 함수에서만 쓸 수 있는 void타입
// return 할 게 없는 경우
// 실수로 return 하는걸 막아줄 수 있음. 
function func(x) {
    1 + 1;
}
func(30);
//파라미터가 옵션일 경우엔 파라미터변수?: 타입
//함수 호출 후 파라미터 넣지 않아도 에러가 나지 않는다.
// 변수?:number == 변수:number|undefined랑 같다.
function test(x) {
}
test();
//퀴즈: 이 함수는 왜 이럴까요?? 
// 타입이 number로 확정지어져 있지 않기 때문에 타입스크립트에서 에러를 보낸다.
function quiz(x) {
    // console.log(x + 3)
}
quiz(2);
// 이름을 파라미터로 입력하면 콘솔창에 '안녕하세요 홍길동'을 출력 
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 '이름이 없습니다.' 출력 
function quiz1(x) {
    if (typeof (x) == 'string') {
        return '안녕하세요' + x;
    }
    else {
        return '이름이 없습니다.';
    }
}
console.log(quiz1());
// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
function quiz2(x) {
    if (typeof (x) == "string") {
        return (x.length);
    }
    if (typeof (x) == "number") {
        x = x.toString();
        return (x.length);
    }
}
console.log(quiz2(2456));
// 결혼 가능 확률을 알려주는 함수 
// 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력받는다. 
// 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산.
// 총 점수가 600점 이상일 경우 '결혼가능'을 return 하기. con
function quiz3(월소득, 집보유여부, 매력) {
    let score = 0;
    let 월소득점수 = 월소득;
    let 집보유여부점수 = 0;
    let 매력점수 = 0;
    if (집보유여부 == true) {
        집보유여부점수 = 500;
    }
    if (매력 == '상') {
        매력점수 = 100;
    }
    score = 월소득점수 + 집보유여부점수 + 매력점수;
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(quiz3(100, false, '상'));

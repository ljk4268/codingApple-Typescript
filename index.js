// null & undefinde 타입체크하는 경우가 많다. 
// && 연산자로 null & undefinde 타입체크하기 
function 함수(a) {
    if (a && typeof a === 'string') {
        // a가 undefined면 if문 실행이 안되고
        // a가 string이면 if문이 실행된다.
    }
}
function 함수2(animal) {
    if ('swim' in animal) {
    }
}
function 함수3(x) {
    if (x.wheel === '4개') {
        console.log('x는 Car타입이에요');
    }
}

class User {
  //필드
  //class에서 쓰는 public : 모든 자식들이 이용 가능
  //pulic 키워드는 항상 강제로 부여가 되어있다.
  // private는 class안에서 수정, 이용가능만 가능. 
  name :string;
  private familyName :string = 'kim';

  //constructor :constructor는 파라미터를 제공해서 입력 받을 수 있다. 
  constructor(name){
    this.name =  this.familyName + name;
  }

  이름변경함수(){
    this.familyName = 'park';
  }

}

let user = new User('minsu');

user.이름변경함수()


class Person{

  constructor(public name :string){
    
  }

}

let 자식 = new Person('kim');


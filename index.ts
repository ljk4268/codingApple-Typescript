// private, protected는 class{}안에서만 사용가능
// private를 쓰면 class 확장된 곳에서는 사용이 불가능! : 확장된 class 사용불가능!!
// extends 된 곳에서도 사용하고 싶으면 protected : 확장된 class 사용가능!! 

class User {
  protected x = 10;
}

class NewUser extends User {
  doThis(){
    this.x = 20;
  }
}

let person = new NewUser();


// static 키워드
// static 키워드 붙이면 부모 class에만 직접 부여돼서 자식은 쓸 수 없다. 

class User2 {

  static skill = 'js';
  intro = User2.skill + '전문가입니다';

}

let 철수 = new User2();


//숙제 : User3.addOne() 쓸 때마다 x가 증가하는 함수

class User3 {
  private static x = 10;
  public static y = 20;
  
  static addOne(num :number){
    User3.x += num;
  }
}




$(document).ready(function(){
    // 1. 입출력 메소드
    /* 개발자도구 - F12, CTRL+SHIFT+i, 검사 > Console
        console.log(); <-- 디버깅할때 주로 사용!
        document.write();
        alert();
        console.log('jquery 실행!');
        alert('잘못된 경로로 접근했습니다'); // 알림,경고창
        document.write("body에 내용을 출력합니다.","<br>");
        document.write("또 다른 내용을 출력합니다.");
        document.write("<h1>body에 내용을 출력합니다.</h1>");
        */
    /* 2. 자료형
    2-1) 숫자(number) : 정수, 부동소수
    2-2) 문자열(string) 
    2-3) 논리(boolean) : true, false    (Python : True, False)
    2-4) 배열(array)
    2-5) 객체(object)
    2-6) 함수(function) <--> 메소드
    2-7) 널/눌(null) 
    2-8) 언디파인드(undefined) <--> 메모리공간에 변수는 생성되었지만, 초기화 안되면 무조건 undefined 상태
    2-9) 클래스(class) : 최근 추가된 (ES6)
    2-10) 심볼(Symbol) : 최근 추가된 (ES6), 사용이 극히 드묾
    */

    /* 3. 변수 선언 키워드
    3-1) var : 오래된, 변수 선언/할당, 재할당 가능 --> 가급적 쓰지말기
    3-2) let : 최근 변수 선언/할당, 재할당 가능 (계속 쓰는..)
    3-3) const : 상수 선언시 할당(=초기화), 재할당 불가능
    ※ let, const를 엄격하게 사용하는 ES6 문법은 보통 "use strict"; 와 함께 사용
    */

    var n1 = 100; // 숫자형 변수
    var n2 = "문자열"; // 문자열형 변수
    var n1 = 50; // 재선언, 재할당 (var의 문제점!)
    //let n1:number = 50; // 타입스크립트 변수 선언(자료형 검사--> 불일치하면, 오류)
    var arr = [10,"a","대한민국"];
    console.log(arr[0]); // 인덱싱 - 배열객체에 접근
    arr[1]="B"; // 배열값 업데이트
    var obj = {name: "홍길동", gender: "남성", job: "학생"} // 오브젝트(=객체)
    console.log(obj.name, obj.gender); // 객체 특정 키(key) ==> 값(value) 출력
    obj.birth = new Date('2000-04-25'); // 생일 정보 (추가)
    var func1 = function(msg){  
        var final = msg + "!.";
        return `${final} 100`;
    } // 함수 표현식, 템플릿 리터럴
    func1("hello");
    function func2(x) { return Math.pow(x,2); } // 함수 선언식
    var result = func2(5);
    console.log("결과는 "+result+"입니다");
    var a; // 자바스크립트 변수값 초기화 --> undefined 상태
    console.log("a : "+a, typeof a);
    var b = null; // 변수 생성, 값은 없는 상태
    console.log("b : "+b, typeof b);

    console.log(n1, typeof n1); // 변수의 자료형을 확인하는 키워드 typeof

    let age = 100;
    age = 50; 
    console.log("age : "+age); // 변수, 문자열 함께 출력
    const ratio = 1.5; // 선언시 할당(=초기화)
    //ratio = 1; // 에러발생! (상수)

    // 클래스 선언식
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        // 실제론 더 작성해야 하지만,..
        // getter
        get area() {
            return this.height *this.width;
        }

        //method

    }
    // 클래스는 선언 후 인스턴스화 해서 사용
    let myRect = new Rectangle(100, 100);
    console.log(myRect.name);

    // 심볼
    let mySymbol = new Symbol();

    // 4. 자바스크립트 예약어
    // 네이밍 : $, _, 영문자, 숫자 조합해서 사용   vs   var var = "변수";   var function = "함수" .. [에러]
})
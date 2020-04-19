Vanilla_JS
2020 0418 SAT Vanilla Java Scripts Nomard

#### 0.1 Requirements
http,css 기본기!

#### 0.2 What are we building
작은 미니 앱들을 만드는 것이다.
마지막에 만드는 것은 모멘텀! -> 크롬 확장 프로그램

#### 1.1 Why JS
Web Programming language
JavaScript 를 통해서 무엇을 만들 수 있는지? 장점은? 단점은?

#### 1.2 Super Powers of JS
JavaScript 의 강점
나의 위치, 날씨 등등 가져오기

#### 1.3 ES5, ES6 ESWTF?
JavaScript의 Versions
ES5 == ECMAScript5 , Specification에 대한 업데이트
컨셉을 배우는 것이 중요하다. 버전은 중요하지 않다.

#### 1.4 What is VanillaJS
VanillaJS는library and framework가 아니다. 
VanillaJS는 JavaScripts의 핵심이다.

#### 1.5 Hello World with JavaScript
index.html, index.css, index.js 만들고 연동
test는 alert(''); , console.log('') 요놈으로 테스트함.

#### 1.5.1 Waht are we learning
언어의 컨셉을 배운다. 

#### 1.6 Your first JS Variable
변수: Variables
JavaScirpt에서 변수를 선언하고, 초기화할때는 let이라는 자료형을 사용한다. 물론 다른거를 사용하기도 함.
```js
console.log('Im Working. Im JS. Im Beautifu. Im worth it ');
let a = 221;
let  b = a - 5;
a = 4;
console.log(b, a);  // 216 4  

```

#### 1.7 let, const, var
let : 변수를 초기화 하는 것을 가능하게 한다.
const : 변수를 상수로 만들기에 변수를 초기화하는 것이 되지 않는다.
var : let, const 나오기 이전에 위의 선택지들이 없을 때 나옴, let과 같이 변수의 값을 변경이 가능하다.

* const로 선언하면 변경이 불가능하다.
```js
console.log('Im Working. Im JS. Im Beautifu. Im worth it ');
const a = 221;
var  b = a - 5;
a = 4; //const로 선언을 하고 바꾸려고 하면 에러가 난다. 
console.log(b, a); # error 가 나타난다.
```

* var 를 사용하면?
```js
console.log('Im Working. Im JS. Im Beautifu. Im worth it ');
var a = 221;
var  b = a - 5;
a = 4; //const로 선언을 하고 바꾸려고 하면 에러가 난다.
console.log(b, a);   #  221 4
```

#### 1.8 Data Types on JS
1. 주석(comment)
2. DataType => String, boolean, number, float

* DataType
```js
// String
const string = "string_test";
console.log(string);

// Boolean => True or False
const boolean = true;
console.log(boolean);

// Number
const number = 77;
console.log(number);

// Float
const float  = 55.1;
console.log(float);
```

#### 1.9 Organizing Data with Arrays
1. 우리가 가진 데이터 타입을 정리하는 방법은? => Array

##### 1. array 사용 방법
```js
// Array
const something = "Something"
const daysOfWeek =  ["Mon", "Tue", "Wed",
 "Thu", "Fri", "Sat", "Sun", 54, true, false, something];

console.log(daysOfWeek); // 모든 목록 출력
console.log(daysOfWeek[3]); // Wed
console.log(daysOfWeek[100]); // undefined
```

#### 1.10 Organizing Data with Object
1. Object -> 각각의 value에 이름을 줄 수 있다.

##### 1. Object를 사용하고, 수정하는 방법
```js
const nicoInfo = {
    name : "nico",
    age : 25,
    gender : "Male",
    isHandsome : false,
    favMovies : ["Along the gods", "LOTR", "Oldboy"],
    favFood : [
        {
            name :  "Kimchi",
            fatty : false,
            name : "Cheese burger"
        },
        {
            name : "Banana"
        }
    ]
 };

 console.log(nicoInfo.gender); // Male

 nicoInfo.gender = "Female" // Object 는 수정 가능

console.log(nicoInfo); // all
console.log(nicoInfo.name);  // nico
console.log(nicoInfo.gender); // Female
console.log(nicoInfo.favMovies) // (3) ["Along the gods", "LOTR", "Oldboy"]
console.log(nicoInfo.favFood[0].name) // Cheese burger
```


















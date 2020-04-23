### 2.1 Your first JS Function
1. function
2. arugment == argument

#### 1. function 사용방법
sayHello라는 함수를 만들어서 argument를 두 개를 받게 만들고 console.log라는 함수를 사용함.

```js
 //first function 
function sayHello(name, age) {
    console.log('Hello!' , name, 'your age is', age);
}

sayHello('deok',25);
sayHello('Nyeong', 25);
sayHello('Nicolas', 30);
```

### 2.1.1 More Function Fun
1. sexy script - 백틱 ``
2. console.log 와 return 의 차이는?


console.log 를사용해서 이름, 나이 받는 함수 사용
```js
function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello('deok',25); // Hello deok you are 25 years old
console.log(sayHello('dcuk', 25)) 
// 위와 같이 수행을 하면 function 안에서 console.log를 사용했기 때문에 console.log는 실행되지 않고, sayHello를 불렀을때 위의 function이 동작하고, console.log는 동작하지 않는다.
// Hello dcuk you are 25 years old
/ undified
```

function에 console.log('') 와 달리 return 을 사용하면?
```js
function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`
}

const test = sayHello('du', 21);
console.log(test); // sayHello 는 return으로 값을 던져서 여기서 값이 출력
sayHello('deok',25); // 여기서는 return으로 받는 변수가 없기에 출력 x
console.log(sayHello('dcuk', 25)) // console.log를 사용해서 출력이 된다.
```

#### 3. const calculator 객체안에 function들을 만들어서 사용해보기
```js

const calculator = {
    plus : function(a, b){
        return ` a + b의 합 : ${a + b}`;
    },
    minus : function(a, b){
        return `${a - b}`;
    },
    pow : function(a, b){
        return `${a ** b}`;
    },
    mutiple : function(a, b){
        return `${a *  b}`;
    }
}

const plus = calculator.plus(5, 10); 
console.log(plus); // 15

const minus = calculator.minus(10, 5); 
console.log(minus); // 5

const pow = calculator.pow(2, 3);
console.log(pow); // 8 

const multiple = calculator.mutiple(3, 5);
console.log(multiple); // 15

```






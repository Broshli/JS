// console.log('hello');
// const a = 1;
// let b = 2;
// var c = 3;

// a = 4;
// console.log(a);

// console.table([a, b, c]);

// console.log(a);
// console.table([a]);

// console.log(typeof null);

// const a='ankitsaklani';
// console.log(a);
// const c = a.substring(-8, 5);
// console.log(c);
// const b = a.slice(1, -4);
// console.log(b);

// console.log(null == 0);
// console.log(null >= 0);
// console.log(undefined == null);
// const gameName = new String('The Legend of Zelda');
// console.log(gameName);
// {
//     a= 1;
//     console.log(a);
// }
// gameName;
// let rahul;
// let rahuls= null;
// console.log(rahul);
// console.log(rahuls);
// console.log(rahul === rahuls);

// a=10;

const min = 1;
const max = 7;
// console.log(Math.floor(Math.random() * (max - min)) + min);

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());

// console.log(mydate.getDay());
// console.log(typeof mydate);

let mytime = new Date("01-14-2023");
// console.log(mytime.toLocaleString());

let mytimestamp = Date.now();

// console.log(Math.floor(mytimestamp/1000));

// newDate.toLocaleStringa( { timeZone: 'en-US' });
// console.log(newDate);

const arr = [11, 2, 3, 4, 55, 6, 7, 8, 9, 10];

const newArr = arr.map(function (x) {
  return x * 2;
});
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// console.log(arr.reverse());
// console.log(typeof arr);

const newArrm = arr.join();
// console.log(newArrm);
// console.log(typeof newArrm);

// console.log(Array.isArray("Ankit"));
// console.log(Array.from("Ankit Saklani "));

// console.log(Array.from({name:"Ankit",age:30}));

let score1 = 100;
let score2 = 80;
let score3 = 90;

// console.log(Array.of(score1, score2, score3));

const arr1 = [10, 20, 30, 40];
const arr2 = [50, 60, 70, 80];
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];
// console.log(arr3)
// console.log(arr4)

const maps = Symbol("keys");
const map = Symbol("keys");

const JsObj = {
  name: "Ankit",
  age: 30,
  "full name": "Ankit Saklani",
  [maps]: "Ankit Saklani's Key of the products",
  map: "Ankit Saklani's Key",
};

// console.log(JsObj.age);

// console.log(JsObj['full name']);

// console.log(JsObj[maps]);
// console.log(typeof JsObj[maps]);
// console.log(JsObj.map);
// console.log(typeof JsObj.map);

if (typeof maps == typeof map) {
  // console.log("maps and map are same");
} else {
  //   console.log("maps and map are different");
}

const newObj = {};

newObj.name = "John";
newObj.age = 30;
newObj["full name"] = "John Doe";
newObj.email = "john@email.com";
// console.log(newObj);

const newObj1 = {
  name: "John",
  age: 30,
  subObj: {
    FullName: {
      AdminFullName: {
        FirstName: "Ankit",
        LastName: "Saklani",
      },
      UserFullName: {
        FirstName: "Sonu",
        LastName: "Gupta",
      },
    },
  },
};

// console.log(newObj1.subObj.FullName.AdminFullName.FirstName);
// console.log(newObj1.subObj.FullName.UserFullName.FirstName);

const obj1 = { 1: "one", 2: "two" };
const obj2 = { name: "John", age: 30 };
const obj3 = { 3: "three", 4: "four" };
const obj4 = { names: "Jane", ages: 25 };

// Object.assign(obj1, obj3);
// Object.assign(obj2, obj4);

// console.log(obj1);
// console.log(obj2);

// console.log((objR = Object.assign(obj1, obj2, obj3, obj4)));

const Course = {
  name: "Web Development 101",
  teachers: ["John", "Jane"],
  students: 30,
  price: "$300",
};

// console.log(Course.name);

const {name, teachers, students, price} = Course;

// console.log(name);
// console.log(teachers);
// console.log(students);
// console.log(price);

const {teachers: teach} = Course;

// console.log(teach);
// console.log(teachers);

// console.log(typeof[
//   {
//     "name": "John Doe",
//     "age": 31,
//     "price": "$500"
//   }
// ])

// console.log(Course['price']);

function UserFullName(params) {
  console.log("A");
  console.log("N");
  console.log("K");
  console.log("I");
  console.log("T");
}

// UserFullName()

function add(num1, num2){
  // console.log(num1+num2);
}

add(20,30);

const arrs = [11, 2, 3, 4, 55, 6, 7, 8, 9, 10]

function array(thparams) {
  return(thparams[1])
}

// console.log(array(arrs));

let Na= 10
const Nb= 20
var Nc=30

if(true){
  let Na=15
  const Nb= 25
  var Nc= 35
}


// console.log(Na);
// console.log(Nb);
// console.log(Nc);

const user = {
  u: 'ankit',
  pr: 999,

  wel:function(){
    console.log(this.u);
    console.log(this);
  },

  // function wel(){
  //   console.log(this.u);
  //   console.log(this);
  // }

  wel2:function(){
    console.log(this);
  }

}

// user.wel()
// user.u="sonu"
// user.wel()

// console.log(this);

function chai(){
console.log(this);
}

// chai()


// const atwo = (n, b) =>{
//   return n+b;
// }
const atwo = (n, b) => n+b;

// console.log(atwo(10,20));


const twoAdd = (num1, num2) => (username = "ankit");

// console.log(twoAdd(10, 20));


// ( function code() {
//   console.log("DB Connector one");
// })();

// ( () => {
//   console.log("DB Connected! two");
// })();

// ( (name) => {
//   console.log(`DB Connected! three ${name}`);
// })("Ankit");

// ( function code(name) {
//   console.log(`DB Connector four ${name}`);
// })("Sonu");

// function code(name) {
//    console.log(`DB Connector five ${name}`);
// }

// code("ankit")


// const month = 3
// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("Mar");
//     // break;
//   case 4:
//     console.log("Apr");
//     // break;

//   default:
//     break;
// }


console.log(typeof(42.1));

// console.log(first);

var a = ['dog', 'cat', 'bird'];
a[100] = 'rabbit';
console.log(a.length);

let rain = ['rain','sun', 'cloud', 'rain','sun', 'cloud'];
rain.splice(0,2);
console.log(rain);


let cat = { type: "cat", size: "large" };
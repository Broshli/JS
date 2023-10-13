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

const min = 1
const max = 7
// console.log(Math.floor(Math.random() * (max - min)) + min);

let mydate = new Date()
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

let mytimestamp = Date.now()


// console.log(Math.floor(mytimestamp/1000));

// newDate.toLocaleStringa( { timeZone: 'en-US' });
// console.log(newDate);

const arr = [11, 2, 3, 4, 55, 6, 7, 8, 9, 10];

const newArr = arr.map(function (x) {
    return x * 2;
})
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(arr.reverse());
console.log(typeof arr);

const newArrm = arr.join();
console.log(newArrm);
console.log(typeof newArrm);
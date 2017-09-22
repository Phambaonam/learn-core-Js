/**
 * Created by NamDuyen on 25/01/2017.
 */

// closure là trong function có return 1 function khác.
/*
 bình thường nếu return trong function thì toàn bộ biến local bên trong function sẽ bị out of scope
 và thu dọn nhưng closure thì có thể dùng được biến local của outer scope
 */


// function check() {
//     var a = 1;
//     return function () {
//         console.log(++a);
//     }
// }
// var test = check();
// // khi invoke function check() thì chỉ trả về là 1 inner function
// console.log(test);
// // phải invoke lần nữa thì inner function mới dc thực thi
// test();
// test();

// // cách viết gọn hơn
// var check = function () {
//     let a = 1;
//     return function () {
//         console.log(a);
//     }
// }();
// check();

/*-------------------------------------------------------*/

// áp dụng những điều trên ta có ví dụ sau
// var sum = function (a) {
//     var number = a;
//     return function (b) {
//         console.log(a + b);
//     }
// };
// var total = sum(5);
// console.log(total);
// total(2);

/* ------------------------------------------ */

// Closure object

// function couter() {
//     var n = 0;
//     return {
//         count: function () {
//             return ++n;
//         },
//         reset: function () {
//             n = 0
//         }
//     }
// }
//
// var myCouter = couter();
// myCouter.count();
// myCouter['count']();

/*-----------------------------------*/
//
// function foo(){
//     var bar = "bar";
//     return function(){
//         console.log(bar);
//     }
// }
//
// function bam(){
//     foo()();
// }
// bam();
// foo()();

/*-------------------------------------------*/
// function foo() {
//     var bar = 0;
//     setTimeout(function () {
//         var baz = 1;
//         console.log(bar++);
//         setTimeout(function () {
//             console.log(bar + bar);
//         },10000);
//     }, 5000);
// }
// foo();

// for (var i = 1; i <= 5; i++) {
//     // console.log(i);
//         setTimeout(function () {
//             console.log("i: " + i);
//         }, i * 1000);
// }


// for (var i = 1; i <= 5; i++) {
//     // console.log(i);
//     (function (i) {
//         setTimeout(function () {
//             console.log("i: " + i);
//         }, i * 1000);
//     })(i)
// }

// var foo =(function(){
//     var o = { bar: "bar"};
//     return { abj: o};
// })();
// console.log(foo.obj.bar);


// function foo() {
//     function bar(a) {
//         i = 3; // changing the `i` in the enclosing scope's
// // for-loop
//         console.log( a + i );
//     }
//     for (var i=0; i<10; i++) {
//         bar( i * 2 ); // oops, inifinite loop ahead!
//     }
// }
// foo();


//biến b và function doSomethingElse() là bảo mật

// function doSomething(a) {
//     function doSomethingElse(a) {
//         return a - 1;
//     }
//     var b;
//     b = a + doSomethingElse( a * 2 );
//     console.log( b * 3 );
// }
// console.log(b);
// doSomething( 2 );

// function foo() {
//     function bar(a) {
//        var i = 3; // changing the `i` in the enclosing scope's
// // for-loop
//         console.log( a + i );
//     }
//
//     for (var i=0; i<10; i++) {
//         bar( i * 2 ); // oops, inifinite loop ahead!
//         break;
//     }
// }
// foo();

// var a = 2;
// (function foo() { // <-- insert this
//     var a = 3;
//     console.log(a);
// })(); // <-- and this
// console.log(a);

var a = 2;
function foo() { // <-- insert this
    var a = 3;
    console.log( a ); // 3
} // <-- and this
foo(); // <-- and this
console.log( a ); // 2

setTimeout( function(){
    console.log("I waited 1 second!");
}, 1000 );
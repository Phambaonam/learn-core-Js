/**
 * Created by NamDuyen on 21/01/2017.
 */

// // - thế nào là scope, biến toàn cục, biến cục bộ
// // - thế nào là function parameter, function argument.
// function foo() {
//     a = a * 2;
//     a = a + 3;
// }
// var a = 10; // a là biến toàn cục, thì để  trước hoặc sau function đều dc
// foo();
// console.log(a); //a = 23 or 10? , Why?
// // a = 23 vì: foo(); dc gọi đến, lúc này a sẽ dc gán lại
//
// foo();
// foo();
// console.log(a);// tương tự như trên , a = 101


/*-------------------------------------------------------*/
// function foo(b) { //function parameter
//     a = a * 2;
//     a = a + b;
// }
// a = 10;
// foo(100); //function argument: có truyền giá trị vào tham số
// console.log(a);
// console.log(b); // Error!!! , b là biến cục bộ, chỉ có thể gọi đến trong function
/*-----------------------------------------*/
// function foo() {
//     a = a * 2;
//     a = a + 3;
//     return a/2;
// }
// var a = 10;
//
// function bar(b) {
//     console.log(a + b);
// }
// // function cũng thể coi là 1 biến, trong function đó phải return 1 giá trị
// bar(foo());
//
// console.log(a);
/*----------------------------------------*/
// function foo(b) {
//     a = a * 2;
//     a = a + b;
//     // console.log(b);
//     return a/2;
// }
// var a = 10;
// // foo(3);
// var b = foo(3);// cái này goi là invoke(gọi lại)
// console.log(a);
// console.log(b);

/*----------------------------------------------------*/
// arguments  && parameter
// arguments object là 1 loại array-like object
// dc sử dụng để truyền các arguments vào trong 1 function
// 'namnam','duyenduyen','namduyen' chính là arguments object
// NÓ k phải là 1 array, nó ko dùng dc property nào của array, ngoại trừ length
// tạm thời biết thế này đã, chưa đi sâu vội
// var sum = function(a,b,c){
//     console.log(arguments['length']);
//     console.log(arguments);
//     var sum ='';
//     for (var key in arguments){
//         // arguments k phải là 1 array
//         console.log(arguments[key]);
//         sum += arguments[key];
//     }
//     console.log(sum);
// };
// sum('namnam','duyenduyen','namduyen');

/*---------------------------------------------------*/
// var sum = function(a,b,c){
//     console.log(a + b + arguments[0]);;
// };
// sum(1,2,3);
// // nghịch 1 tí
// var love = function(a,b,c){
//     for(var key in arguments){
//         alert('my name is ' + argument[key]);
//     }
// };
// love('namnam','duyenduyen','namduyen');

/*---------------------------------------------------------*/

// // constructor
// var person = function (name) {
//     return {
//         info: function () {
//             console.log('my name is ' + name);
//         }
//     }
// };
// var love = person('namduyen');
// console.log(love);
// love.info();

/*-----------------------------------------*/

// // Loop
// var names = ['namnam', 'duyenduyen', 'namduyen'];
// var person = function (name) {
//     return {
//         info: function () {
//             return('my name is ' + name);
//         },
//         name: name
//     }
// };
// var fullname =[];
// var detail =[];
// for (var key in names) {
//
//     var love = person(names[key]);
//     // console.log(love);
//     detail[key] = love.info();
//
//     // thằng này nó add theo thứ tự
//     fullname[key] = person(names[key]);
//
//     // thằng này nó cứ add về phía cuối
//     // fullname.push(person(names[key]));
// }
// console.log(fullname);
// console.log(detail);

/*----------------------------------------------------------*/
// Bài tập
//
// //1
// var testsheep = function animalTestUser(name){
//        return {
//             username: function(){
//                 console.log(name);
//             }
//         };
// };
//
// testsheep('dog');
// // console.log(testsheep);
//
// var testsheep = function animalTestUser(name,otherArgs){
//     return {
//         username:name,
//         otherArgs:otherArgs
//     }
// };
//
// var AnimalCreator = function(username,species,tagline,noise){
//     return {
//         username: username,
//         species:species,
//         noise:noise,
//         tagline:tagline,
//         friends:[]
//     }
// };
// var addFriend = function(){
//
// };









































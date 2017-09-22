/**
 * Created by NamDuyen on 22/01/2017.
 */
/*
 - array  sử dụng property là indexs
 */

/*-----------------------------------------------*/
var a = [];

a[0] = 'namduyen';
a[1] = 2110;
a[4] = 'namnam';
a.push({'status': 'love'});

var i = 0;

console.log(a[i]);
console.log(a);
console.log(a.pop());
// hàm pop() dùng để remove phần tử cuối cùng của array, rồi trả về
// 1 array mới gồm những phần tử còn lại
console.log(a);

/*---------------------------------------*/
// array kế thừa object nếu nó có property name của object
// thì nó sẽ ko sử dụng dc property indexs nữa ,
// lúc này nó ko phải là array nữa.

var box = [];
box['age'] = 2110;
box['name'] = 'namduyen';
box[0] = 'love'; // xem lại bài object để hiểu dòng này
console.log(box); // ["love", age: 2110, name: "namduyen"]
console.log(typeof box);
console.log(box[0]);

/*----------------------------------*/
var box = [];
box.test = 'demo';
box['age'] = 2110;
box['name'] = 'namduyen';
box[0] = 'love';

for (var key in box) {
    console.log(key);
    // console.log(typeof key);
    console.log(box[key]);
}

/*------------------------------------------*/
// Sự khác biệt giữa array và object
//  array sử dụng number indexs
//  object sử dụng name indexs
// array có tính kế thừa của object, xem phần quy tắc kết nối trong thuộc tính của object
var a = [1, 2, 3, 'namduyen'];
a[0]; // chính là nó đây
console.log(a[0]);

//  để tính chiều dài của array ta sử dụng thuộc tính length, còn object thì ko dùng đc.


var box = [];
box['age'] = 2110;
box[0] = 'namduyen';
box.push('love');

console.log(box); // object
for (var i = 0; i <= box.length; i++) {
    // console.log(typeof box[i]);
    console.log(box[i]);
                         // namduyen, love, undefined
                         // tại sao box[2] lại là undefined
                         // tại vì 'age: 2110' là property name của object, thằng array nó
                         // ko hiểu vì nó sử dụng property indexs, mặc dù array cũng là object
}

// array cũng là object, ta có thể sử dụng for ..in
// Vậy ta đã biết khi nào sử dụng for, khi nào sử dụng for...in
for (var key in box){
    console.log(key);
    console.log(box[key]);
}

/*--------------------------------------*/

// theo quy tắc kết nối property trong abject thì
// array có vài property như: length; constructor; prototype
// ví dụ thay vì dùng dấu chấm, ta có thể dùng dấu ngoặc vuông

var a =['namduyen',2110,'namnam','duyenduyen'];
// 2 thằng này cho ra kết quả như nhau
console.log(a.length);
console.log(a['length']);

console.log(a[a.length - 1]);
console.log(a[a['length'] -1]);

console.log(a.constructor);
console.log(a['constructor']);

/*-------------------------------------------------*/

// vài cái hay ho t thấy dc

var a =['namduyen',2110,'namnam','duyenduyen'];
// sự khác biệt giữa add property và add value là gì?




// có 2 cách để add 1 phần tử vào vị trí cuối của 1 array
a.push('i love you'); // sử dụng method
a[a.length] = 'i love you'; // sử dụng property
console.log(a);











































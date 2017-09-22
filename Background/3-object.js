/**
 * Created by NamDuyen on 21/01/2017.
 */

/*
 - property trong object phải là string

 */
/*-----------------------------------------------*/
var demo ={};
// thêm property và value cho object
demo.name = 'i love you';

console.log(demo);
/*----------------------------------------------*/
var a = {};

a['name'] = 'namduyen';

var b = function () {
    return 'name';
};
console.log(typeof b);
console.log(a[b()]);

/*---------------------------------------------*/

var box = {};
box.name = 'namduyen';
var key = 'namduyen';

console.log(box.key); //sẽ là underfined vì ko tồn tại thuộc tính key

/*------------------------------------------------*/

/*
 Vài quy tắc để kết nối với thuộc tính

 DOTS: string

 Brackets: "strings, " kí hiệu kì quặc, biến, number, expressions

 */

var c = {
    name: 'namduyen',
    age: '2110',
    0: 'duyennam',
    '@424%': 'test'
};

console.log(c.name);
console.log(c["age"]);
console.log(typeof c.age);
console.log(c[0]);
// property phải là string, tại sao 0 là number mà vẫn chạy dc?
// thực chất nó là thế này:
//  từ number sẽ dc convert sang string , nó gần giống như chạy hàm toString()
/*---------------------------------------*/

var d = {
    name: 'namnam',
    age: '2110',
    0: 'duyenduyen',
    '@424%': 'test'
};
for (var key in d) {
    // dùng cái nào
    // console.log(d.key);
    console.log(d[key]);

    // do key là biến nên dùng cái thứ 2
}

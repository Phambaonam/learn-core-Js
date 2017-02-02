/**
 * Created by NamDuyen on 25/01/2017.
 */

/*
- Trước khi bắt đầu ta nên cần biết vài điều sau:
-JavaScript type có thể chia thành 2 loại sau: kiểu dữ liệu nguyên thủy và kiểu dữ liệu object
+ kiểu dữ liệu nguyên thủy bao gồm: number, string, boolean, null & underfined.
+ kiểu dữ liệu object: là những kiểu ko thuộc những loại trên.
*/


// Text
// working with string


// dùng toán tử "+" dùng để nối chuỗi,
 var name = "nam" + "duyen";
console.log(name);

// đây là những method mà bạn có thể invoke string
var s = "hello, world" // Start with some text.
s.charAt(0) // => "h": the first character.
s.charAt(s.length-1) // => "d": the last character.
s.substring(1,4) // => "ell": the 2nd, 3rd and 4th characters.
s.slice(1,4) // => "ell": same thing.
s.slice(-3) // => "rld": last 3 characters.
s.indexOf("l") // => 2: position of first letter l.
s.lastIndexOf("l") // => 10: position of last letter l.
s.indexOf("l", 3) // => 3: position of first "l" at or after 3.
s.split(", ") // => ["hello", "world"] split into substrings.
s.replace("h", "H") // => "Hello, world": replaces all instances.
s.toUpperCase() // => "HELLO, WORLD".
// Hãy nhớ rằng: string ko biến đổi trong Javascript.
// các phương thức replace() và toUpperCase() trả về 1 string mới.
/*--------------------------------------------------------------------------------
* */
// trong ECMAScript 5 trở lên thì 1 string có thể dc xử lý như read-only array.
// có thể kết nối với ký tự trong string bằng việc xử dụng dấu [] giống
// trong array thay vì xử dụng method charAt().
s = "hello, world";
s[0] // => "h"
s[s.length-1] // => "d"



// trong các phiên bản ECMAScript 5 trở lên thì 1 chuỗi string
// có thể viết thành nhiều dòng nhưng phải kèm theo dấu "\"
var demo = "nam\
duyen\
duyen\
nam";
console.log(demo);


/*----------------------------------------------------------------------*/
/* đây là các kiểu  có sẵn trong Javascript:
 * string
 * number
 * boolean
 * null & underfined
 * object
 * symbol(es6)
 * */
// khi gán giá trị cho a = undefined hay ko gán thì typeof là undefined
var a;
console.log(typeof a); // "undefined"
a = undefined;
console.log(typeof a); // "undefined"

a = "hello world";
console.log(typeof a); // "string"

a = 42;
console.log(typeof a); // "number"

a = true;
console.log(typeof a); // "boolean"

// thằng null mới là ảo nòi
a = null;
console.log(typeof a); // "object"--weird, bug

a = { b: "c" };
console.log(typeof a);
/*--------------------------------------------------------------*/
// Bất kỳ value nào của Js đều có thể convert sang kiểu value của boolean.
// những kiểu giá trị sau sẽ được  convert thành fasle

undefined
null
0
-0
NaN
"" // the empty string


























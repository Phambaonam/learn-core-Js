/**
 * Created by NamDuyen on 21/01/2017.
 */
// những đoạn code nằm trong dấu {...} dc gọi là 1 scope
// scope  là nói lên phạm vi sử dụng của biến trong function
// gồm có 2 loại: biến local (cục bộ), biến global(toàn cục)
// Quy tắc: scope bên trong có thể kết nối biến của các scope bên ngoài
// đoạn code này có 3 scope khác nhau hay gọi là nested scope
function foo() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz() {
            var c = 3;
            console.log(a, b, c); // 1 2 3
        }

        baz();
        console.log(a, b); // 1 2
    }

    bar();
    console.log(a); // 1
}
foo();

/*----------------------------------------------------------*/

// trong 1

var box = false;

for(var i =0; i<4; i++){
    box = true;
}
if(box){
    console.log('namduyen');
}





















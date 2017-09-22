/**
 * Created by NamDuyen on 18/01/2017.
 */

/*
 - Mệnh đề điều kiện cũng là 1 loại block

 - từ vòng lập while và do..while ta nâng cấp lên sử dụng vòng lặp for,
  hiểu đơn giản từ while/do...while thì sang for cũng tương tự
*/

// - Mọi biến sử dụng trong chương trình cần phải được khai báo
// trước lần sử dụng đầu tiên


var a =1;
do{
    console.log(a);
    a = 8;
    a++;
    console.log(a);
    console.log('namduyen');
} while(  2 >1);


var a =1;
while( a < 10 ){
    console.log(a);
    a = 8;
    a++;
    console.log(a);
}


for(var a =1; a <10; a++){
    console.log(a);
    // break
    a = 8;
    console.log(a);
    // break
}




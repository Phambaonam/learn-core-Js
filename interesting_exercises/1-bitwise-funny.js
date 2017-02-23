/**
 * Created by phambaonam on 24/02/2017.
 */
/*
 *
 *
 *
 *
 *
 *
 * */

let a = 10 / 3;

//  Math.floor(): làm tròn xuống số nguyên gần nhất
console.time('Math.floor');
console.log(Math.floor(a)); // 3
console.log(Math.floor(-a)); //-4
console.timeEnd('Math.floor');

// parseInt(): parse 1 string và trả về 1 số nguyên
console.time('parseInt')
console.log(parseInt(a)); // 3
console.log(parseInt(-a, 10)); // -3 && If the string begins with any other value, the radix is 10 (decimal)
console.timeEnd('parseInt')

// use bitwise operator as a replacement
// for Math.floor(n) (if n is a positive number)
// or parseInt(n, 10) (even if n is negative)

// Double bitwise NOT
console.time('Double bitwise NOT');
console.log(~~a); //  3
console.log(~~(-a)); // 3
console.timeEnd('Double bitwise NOT');

// Bitwise OR
console.time('Bitwise OR');
console.log(a | a); // 3
console.log((-a) | (-a)); // -3
console.timeEnd('Bitwise OR');

// Bitwise OR with 0
console.time('Bitwise OR with 0');
console.log(a | 0); // 3
console.log((-a) | 0); // -3
console.timeEnd('Bitwise OR with 0');

// Bitwise left shift
console.time('Bitwise left shift');
console.log(a << 0); // 3
console.log((-a) << 0); //3
console.timeEnd('Bitwise left shift');

// Bitwise AND
console.time('Bitwise AND');
console.log(a & a); // 3
console.log((-a) & (-a)); // -3
console.timeEnd('Bitwise AND');

// ~ <=> -(parseInt(n, 10) + 1)
// ~~ <=> -(-(parseInt(n, 10) + 1) + 1)

function lateRide(n) {
    let hours = n / 60 | 0,
        minutes = n % 60;
    console.log(hours / 10 | 0);
    console.log(minutes / 10 | 0);
    console.log(hours % 10);
    console.log(minutes % 10);
    console.log((hours / 10 | 0) + hours % 10 + (minutes / 10 | 0) + minutes % 10);
    // console.log(0 + hours % 10 + 0 + 0);
}

lateRide(60);
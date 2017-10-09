// let person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";


// let person = {
//     firstName:"John", 
//     lastName:"Doe", 
//     age:50, 
//     famous: false,
//     family: {
//         wife: 'Sally Rally',
//         son: 'Pi',
//         daughte: 'Mary'
//     },
//     getInfo: function () {
//         return `This is ${this.firstName} ${this.lastName}, His wife is ${this.family.wife}`
//     }    
// }

// console.log(person.getInfo())

// function person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// var myFather = new person("John", "Doe", 50, "blue");
// var myMother = new person("Sally", "Rally", 48, "green");

// console.log(myFather)
// console.log(myMother)


// var name = 'Hoang';
// var obj = {
//    name: 'Alibaba',
//    prop: {
//       name: 'Aladin',
//       getName: function() {
//          return this.name;
//       }
//    }
// };
// console.log(obj.prop.getName());
// var test = obj.prop.getName;
// console.log(test());

// let animalNo1 = {
//     type: 'Cat',
//     cry() {
//         return `${animalNo1.type} cries Meow Meow`
//     }
// }

// console.log(animalNo1.cry())

// let animalNo2 = {
//     type: 'Dog',
//     cry() {
//         return `${this.type} cries Gaoo Gaoo`
//     }
// }

// console.log(animalNo2.cry())

// let cat = {
//     name: 'Tom',
//     spacies: 'Russian Blue',
//     intro(){
//         return `${this.name} is a ${this.spacies} cat`
//     }// ở đây this sẽ trỏ tới đối tượng cat tương ứng cat.name,cat.spacies
// }
// // Tom là một chú mèo Nga lông xanh
// console.log(cat.intro()) // in ra 'Tom is a Russian Blue cat'


// let cat = {
//     // trạng thái
//     name: 'Tom',                // thuộc tính
//     spacies: 'Russian Blue',    // thuộc tính
//     sound: 'meow meow',         // thuộc tính

//     // hành vi
//     cry() {                     // phương thức
//         return `${this.name} cries ${this.sound} ${this.sound}`
//     }
// }
// // log ra đối tượng cat:
// console.log(cat) // in ra cat {name: 'Tom', spacies: 'Russian Blue',...}

// // kiểm tra kế thừa với instanceof 
// console.log(cat instanceof Object) // in ra true 
// // tức đối tượng 'cat' là kế thừa của nguyên mẫu Object

// var person = { }
// person.firstName = "John"
// person.lastName = "Doe"
// person.age = 5
// person.eyeColor = "blue"
// console.log(person) // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }

let cat = {// đây là các thuộc tính
    name: 'Tom',                // tên là Tom    
    spacies: 'Russian Blue',    // loài mèo Nga lông xanh
    cry(){                      // Tom kêu meo meo
        return `${this.name} cries Meow Meow`
    } // đây là một method (phương thức) dưới dạng hàm
}

console.log(Object.keys(cat).length) 
//in ra 3 là số lượng thuộc tính và phương thức của đối tượng

console.log(cat.toString()) 
// in ra [object Object] dù ta chưa khai báo method toString() cho cat,nó được kế thừa từ Object.
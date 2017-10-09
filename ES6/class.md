# Questions:
1. Sử dụng this cung cấp một cách truyền object vào function gọn gàng hơn, giúp ta xây dựng một giao diện ứng dụng trông clean hơn và dễ dàng reuse(như thế nào)?


# Class trong javascript(ES6)
1. Các khái niệm cần nắm vững.
* Hoisting Javascript:
  * là thao tác chuyển tất cả các khai báo biến lên trên cùng của hàm, còn các phép gán vẫn giữ nguyên vị trí, xem đoạn code sau
```javascript
    console.log(a); //undefined
    var a = 123;
    console.log(a); // 123
```   
  * Mặc dù console.log(a); được viết trước khi a được khai báo nhưng ta không hề bị `ReferenceError`. Lý do chính là Hoisting, đoạn code sẽ trở  thành như sau trong quá trình `Compilation`:
```javascript
    var a;
    console.log(a); //undefined
    a = 123;
    console.log(a); // 123
```  
  * Xem tiếp ví dụ sau:
  ```javascript
      var foo = 10;
      function bar() {
          if (!foo) {
              var foo = 100;
          }
          console.log(foo);
      }
      bar(); // 100
  ```
  * Trong scope tạo bởi function `bar()` xảy ra hoisting cho `var foo = 100;` việc giá trị của `foo` khi thực hiện `if (!foo)` sẽ là `undefined` thay vì `10`, vậy nên `!foo == true` và `foo = 100` được thực hiện, kết quả in ra ngoài sẽ là `100`.
  * Quá trình `Compilation`:
  ```javascript
      var foo = 10;
      function bar() {
          var foo;
          if (!foo) {
            foo = 100;
          }
          console.log(foo);
      }
      bar(); // 100
  ```
  * Để tránh xảy ra tình trạng `Hoisting` ta dùng `let`
  ```javascript
      function printName() {
        if(true) {

          let name = "Framgia";

        }
        console.log(Framgia); // ReferenceError: name is not defined
      }
  ```
  ```javascript
      function printName() {
        var name = "Fram";
        if(true) {
          let name = "Gia";
          console.log(name); // Gia
        }
        console.log(name); // Fram
      }
  ```
  ### Kết Luận:JavaScript là function-level scope (không phải là block-level scope ) nên khi xảy ra `Hoisting` thì rất nguy hiểm nếu ta không hiểu rõ và khái báo bừa bãi . Việc sử dụng Hoisting dễ phát sinh ra nhiều bug khó phát hiện và xử lý, vậy luôn khai báo hàm/biến ở trên cùng thay vì để chúng nó tự `Hoisting`.  
  * [Link tham khảo](https://viblo.asia/p/tim-hieu-ve-javascript-hoisting-qm6RWqoyGeJE)

* This trong javascript(rắc rối):
  * Link:
  * [Từ khóa this](https://www.youtube.com/watch?v=icsHlFlsPBo)
  * [Con trỏ this trong Javascript](https://viblo.asia/p/con-tro-this-trong-javascript-XL6lAgLNKek)
  * [Bàn về this trong JavaScript - Tại sao lại là "this"](https://viblo.asia/p/ban-ve-this-trong-javascript-tai-sao-lai-la-this-gDVK2wMmZLj)
  * [Dùng con trỏ this trong Javascript thế nào cho đúng?](https://techtalk.vn/javascript-dung-con-tro-this-trong-javascript-the-nao-cho-dung.html)
  * [Four Rules to Define this in JavaScript](https://john-dugan.com/this-in-javascript/)

* Closure: 
    * https://kipalog.com/posts/Closure-va-scope-trong-javascript
    * https://kipalog.com/posts/JavaScript-Closures
    *  https://vibloasia/p/tim-hieu-sau-hon-ve-scope-javascript-Qbq5QrRwKD8
    * https://techmastervn/posts/34337/tim-hieu-ve-javascript-closures

2. Class.
* Class ở trong ES6 mang cấu trúc thuần OOP.Chúng ta có thể sử dụng trực tiếp từ khóa class để tạo một class mới.
* Thực tế các class giống như một một `function đặc biệt`, và cũng giống như bạn có thể định nghĩa hàm biểu thức (`function expressions`)  và khai báo hàm (`function declarations`):
```javascript
    class Person {
      // code here
    }
    console.log(typeof Person) //function
```
  * Khi `instances` class với từ khóa `new` thì ta thu được 1 `object`:
```javascript
    class Person {
    // code here
    }
    const person = new Person()

    console.log(typeof person) // object
```
* Cú pháp class có hai thành phần: biểu thức class `(class expressions)` và khai báo lớp `(class declarations)`.
* `Class declarations`: dùng để khai báo cho chương trình biết đây là class. Để khai báo một class, bạn sử dụng từ khóa class với tên của class đằng sau và được viết hoa kí tự đầu tiên. 
```javascript
    class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    }
```
* ```Class expressions```: là một cách khác để khai báo một class. Biểu thức class có thể có tên hoặc không tên. Tên được đặt cho biểu thức lớp là tên đại diện cho `phần thân của class`.
```javascript
    // không tên
    var Rectangle = class {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    };

    // đặt tên
    var Rectangle = class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    };
```
* `Phần thân class và định nghĩa phương thức`:
  * Phần thân của một class là phần nằm trong dấu ngoặc nhọn `{}`. Tại đó bạn có thể định nghĩa các thành phần con của class như method hoặc constructor (hàm khởi tạo).
  * `Constructor (hàm khởi tạo)`: là một hàm đặc biệt, nhiệm vụ của nó là khởi tạo một đối tượng cho một class, nó được tự động thực thi khi tạo 1 new object.
  ```javascript
      class Person {
        constructor (name, age) {
            this._name = name
            this._age = age
        }
      }
      const person = new Person('ND',2321)
      console.log(person) // Person {_name: "ND", _age: 2321}
      console.log(`My name is ${person._name}, I'm ${person._age}`) // My name is ND, I'm 2321
  ``` 
  * Trong một class chỉ có thể tồn tại `duy nhất` một hàm khởi tạo, nghĩa là bạn chỉ có thể khai báo duy nhất một hàm với tên `constructor`. Nếu bạn cố gắng làm ngược lại (khai báo nhiều hơn một hàm constructor thì sẽ xuất hiện lỗi `SyntaxError: A class may only have one constructor`:
```javascript
    class Person {
      constructor (name, age) {
          this._name = name
          this._age = age
      }
      
      constructor (hobby) {
        this._hobby = hobby
    }
    }
    const person = new Person('ND',2321)

    console.log(`my name is ${person.name}, I'm ${person.age}`) // SyntaxError: A class may only have one constructor
```

  * [Đặc điểm của hàm khởi tạo](https://vi.wikipedia.org/wiki/H%C3%A0m_t%E1%BA%A1o_(l%E1%BA%ADp_tr%C3%ACnh_h%C6%B0%E1%BB%9Bng_%C4%91%E1%BB%91i_t%C6%B0%E1%BB%A3ng))
  
  * `Phương thức Prototype`: là các hàm thực hiện các hành động của đối tượng:
  ```javascript
      class Rectangle {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
        
        get area() {
          return this.calcArea();
        }

        calcArea() {
          return this.height * this.width;
        }
      }
  ```
  * Để sử dụng được các `phương thức` và `constructor` của class thì bạn phải instance tới class đó trước, nghĩa là phải gọi tới class trước rồi mới đến các phương thức bên trong. Để `instances` class phải dùng từ khóa `new` cộng với `tên class`.
  ```javascript
      const square = new Rectangle(10, 10)
      console.log(square.area)
  ```
  * `Phương thức Static (phương thức tĩnh)`: Từ khóa `static` định nghĩa một hàm static (hàm tĩnh) trong một class. Nếu muốn gọi hàm static này thì bạn không cần gọi chúng thông qua các `instantiating` của class đó và bạn cũng không thể gọi chúng thông qua cách khởi tạo class. Hàm static thường được sử dụng vào mục đích tạo ra một hàm tiện ích (có thể gọi là hàm dùng chung) cho cả một ứng dụng.
  ```javascript
      class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
      }     
    }

    const p1 = new Point(5, 5);
    const p2 = new Point(10, 10);

    console.log(Point.distance(p1, p2));
  ```

* Tạo class con với `extends`:
Từ khóa [extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) được sử dụng trong class declarations hoặc class expressions để tạo ra một class con kế thừa từ một class sẵn có (class cha).

```javascript
    class Animal { 
      constructor(name) {
        this.name = name;
      }
      
      speak() {
        console.log(this.name + ' makes a noise.');
      }
    }

    class Dog extends Animal {
      speak() {
        console.log(this.name + ' barks.');
      }
    }

    var d = new Dog('Mitzie');
    d.speak(); // Mitzie barks.
```
  * Khi có một constructor trong class con thì ta sẽ gọi đó là sub-class, khi đó nó cần gọi hàm `super()` trước khi có thể sử dụng `this`

  ```javascript
      class Point {
          constructor(x, y) {
              this.x = x;
              this.y = y;
          }
          toString() {
              return `(${this.x}, ${this.y})`;
          }
      }

      class ColorPoint extends Point {
          constructor(x, y, color) {
              super(x, y); // (A)
              this.color = color;
          }
          toString() {
              return super.toString() + ' in ' + this.color; // (B)
          }
      }

      const cp = new ColorPoint(25, 8, 'green');
      cp.toString() // '(25, 8) in green'

      cp instanceof ColorPoint // true
      cp instanceof Point // true
  ```
  * Toán tử [instanceof](https://www.google.com.vn/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiWpeLO_7fWAhUBtY8KHaRmBr0QFggkMAA&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fvi%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Finstanceof&usg=AFQjCNFDdiuWQqk88AskMJd9wGfeaGu7ow).

* Từ khóa 1 [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) : dùng để gọi một hàm có sẵn ở đối tượng cha.
```javascript
      class Cat { 
        constructor(name) {
          this.name = name;
        }
        
        speak() {
          console.log(this.name + ' makes a noise.');
        }
      }

      class Lion extends Cat {
        speak() {
          super.speak();
          console.log(this.name + ' roars.');
        }
      }

      var l = new Lion('Fuzzy');
      l.speak(); 
      // Fuzzy makes a noise.
      // Fuzzy roars.
```
## Private data cho class
* Private data: Data stored in the environment is only accessible to the constructor and functions created inside it.
* Có 4 cách để private data cho class ES6:    
    * Private data via constructor environments (đã có ở ES5).
    * Private data via name convention (đã có ở ES5).
    * Private data via weakmaps (có ở ES6).
    * Private data via symbols (có ở ES6).
### Private data via constructor environments
* Miêu tả: khi constructor được gọi đến thì có 2 thứ được tạo ra: `constructor’s instance` và một `environment`. instance được khởi tạo bởi constructor, environment sẽ chứa các `parameters` của constructor và các `local variable`. Mỗi function (bao gồm cả method) được tạo ra ở bên trong constructor sẽ dùng lại những  `parameters` và `local variable` của environment.
```javascript
    class Countdown {
        constructor(counter, action) {
            Object.assign(this, {
                dec() {
                    if (counter < 1) return;
                    counter--;
                    if (counter === 0) {
                        action();
                    }
                }
            });
        }
    }
```
  * 2 tham số `counter` , `action` được coi là  private data.  

## Nguồn tham khảo:
* [mozilla](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Classes)
* [exploringjs.com](http://exploringjs.com/es6/ch_classes.html)



## [Một số bài tập thực hành với class](http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises):
1. Write a class called Point, which represents a point in two-dimensional space. A point has x and y properties, given as arguments to its constructor.It also has a single method plus, which takes another point and returns the sum of the two points, that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties. (Cho 1 class Point có 2 thuộc tính x, y thuộc constructor, có 1 method plus với tham số truyền vào là point (point chính là class Point với 2 thuộc tính ban đầu), tính tổng thuộc tính x, y của class Point ban đầu với class Point của method plus)
```javascript
    console.log(new Point(1, 2).plus(new Point(2, 1)))
    // → Point{x: 3, y: 3}
```
* Answer
```javascript
    // Your code here
    class Point {
      constructor (x, y) {
         this.x = x
         this.y = y
      }
        
      plus (point) {
          this.x += point.x
          this.y += point.y        
          return new Point(this.x, this.y)
      }
    }

    console.log(new Point(1, 2).plus(new Point(2, 1)))
    // → Point{x: 3, y: 3}
```
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
* This trong javascript:

2. Class.
* Class ở trong ES6 mang cấu trúc thuần OOP.Chúng ta có thể sử dụng trực tiếp từ khóa class để tạo một class mới.
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
  * `Constructor (hàm khởi tạo)`: là một hàm đặc biệt, nhiệm vụ của nó là khởi tạo một đối tượng cho một class. Trong một class chỉ có thể tồn tại `duy nhất` một hàm khởi tạo, nghĩa là bạn chỉ có thể khai báo duy nhất một hàm với tên `constructor`. Nếu bạn cố gắng làm ngược lại (khai báo nhiều hơn một hàm constructor thì sẽ xuất hiện lỗi `SyntaxError`.
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
  * Để sử dụng được các `phương thức` và `constructor` của class thì bạn phải instance tới class đó trước, nghĩa là phải gọi tới class trước rồi mới đến các phương thức bên trong. Để instances class phải dùng từ khóa `new` cộng với `tên class`.
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
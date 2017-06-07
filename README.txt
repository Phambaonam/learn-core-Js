1. What is the process and thread?
- Read link:
+ https://msdn.microsoft.com/en-us/library/windows/desktop/ms681917(v=vs.85).aspx
+ https://stackoverflow.com/questions/200469/what-is-the-difference-between-a-process-and-a-thread
+ https://techmaster.vn/posts/33604/su-khac-nhau-giua-process-va-thread

2. What is single thread, multi thread?
+ https://softwareengineering.stackexchange.com/questions/97615/what-can-multiple-threads-do-that-a-single-thread-cannot
+ https://codewala.net/2015/07/29/concurrency-vs-multi-threading-vs-asynchronous-programming-explained/

3. Javascript run  single-threaded or multi-threaded?
- Unlike C#, java, C, Ruby and other multi-threaded.
  Imagining so most bank , like most languages can execute code currently, at the same time.
- Js run single thread. Js engine can only execute one piece of code at a time , like a bar with only one bathroom that means
  only one person can go to the bathroom at the time.

4. What is Asynchronous,synchronous? and  How is Asynchronous vs synchronous execution in Javascript?
- Synchronous: When you execute something synchronously, you wait for it to finish before moving on to another task.
- Asynchronous : When you execute something asynchronously, you can move on to another task before it finishes.
  When you execute something asynchronously,you can move on to another task before it finishes.
- JavaScript runs in the UI thread of the browser and any long running process will lock the UI,
  making it unresponsive(trình duyệt không gửi phản hồi lại).
  Additionally, there is an upper limit on the execution time for JavaScript and
  the browser will ask the user whether to continue the execution or not(Browser sẽ hỏi user sẽ tiếp tục thực hiện truy cập nữa ko?)

5. What is blocking, non-blocking?

6. How to solve Asynchronous in javascript?
- To solve, we have three different solutions:
+ Callback.
+ Promises (ES2015+).
+ async/await (ES2017+)

7. Run asynchronous in Javascript, does it means multi threaded?
- Read link:
+ https://stackoverflow.com/questions/8963209/does-async-programming-mean-multi-threading
+ https://stackoverflow.com/questions/30036/javascript-and-threads/30891727#30891727
+ https://stackoverflow.com/questions/35241127/how-does-a-single-thread-handle-asynchronous-code-in-javascript

8. What's Callback?
+ Callback: A callback is simply a function passed to another function.
  That other function can call the function passed whenever it is ready.
  In the context of asynchronous process, the callback will be called whenever the asynchronous process is done.
  Usually the result is passed to the callback.

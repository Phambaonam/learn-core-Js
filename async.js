/**
 * Created by doremonsun on 6/5/17.
 */
/*************************************
 - Using setTimeout function
 *************************************/
/* Example 1 */
one= () =>{
    setTimeout( () => {
        console.log('1. First thing setting up second thing');
        setTimeout( () => {
            console.log('2. Second thing setting up third thing');
            setTimeout( () => {
                console.log('3. Third thing setting up fourth thing');
                setTimeout( () => {
                    console.log('4. Fourth thing');
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}
one()

let data
function learnProgram(subject, callback) {
    if (subject === 'it')
    //  Usually the result returned by Asynchronous is passed to the callback or callback get data returned by Asynchronous
        data = 'it'
        callback(data)
}
function getJob(nameJob) {
    console.log('my job is: ' + nameJob);
}
learnProgram('it', getJob)

/************** Read link **************
 - Asynchronous Adventures in JavaScript: Callbacks
   https://medium.com/dailyjs/asynchronous-adventures-in-javascript-callbacks-39880f1b470e
 - https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call?rq=1
 - asynchronous-vs-synchronous-execution
   https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean?rq=1
 - Asynchronous vs synchronous execution, what does it really mean?
   https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean?rq=1
 *************************************/
//ToDo: Xử lí asynchronous trong javascript


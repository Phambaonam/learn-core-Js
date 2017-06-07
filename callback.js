/**
 * Created by doremonsun on 6/5/17.
 */
/*************************************
A callback is simply a function passed to another function
*************************************/
/* Example 1 */
 name =(name)=>{ console.log(name) }
 person=(callback)=>{callback()}
 print =()=> {
    person(()=> { name('nam') })
}
print()

/*************************************
 Callback hell
 *************************************/
/* Example 2 */
func_1 = () =>{ console.log('demo callback hell') }
func_2 = (callback) =>{callback()}
func_3 = (callback) =>{callback()}
demoCallbackHell = () =>{
    func_3( ()=>{
        func_2( ()=>{
            func_1()
        })
    } )
}
demoCallbackHell()

/* Example 3 */
// https://codereview.stackexchange.com/questions/146095/example-of-callback-hell
 compute_first_parameter= (callback) => { callback(42) }
 compute_second_parameter = (callback) => { callback(10) }
 compute_sum = (a, b, callback) => { callback(a + b) }
 compute_a_result = () => {
    compute_first_parameter((x)=> {
        compute_second_parameter( (y) => {
            compute_sum(x, y,  (result) => {
                console.log('Sum is: '+result);  // 52
            });
        });
    });
}
compute_a_result()

/*************************************
 - Using callback to solve asynchronous.
 - In the context of asynchronous process, the callback will be called whenever the asynchronous process is done.
   Usually the result is passed to the callback.
 *************************************/
let car = buy_car = (callback) => { callback() }
let girl = picnic_with_girl = (callback) => { callback() }
go_to_hotel = () => { console.log('Ok')}


// function sum (a,b){
//  console.log(a+b);
// }
// sum(7,8);


// con();
// function con(){
//     let a="Huzaifa";
//     console.log(a);
// }

//     return console.log("ok");

// }
// f();
// var f = () =>  {
// f();











// console.log(f);
// var f = function (){       
// return console.log("ok");
// }
    
// const arr = [5,6,7,8,9];

// function double(x){
//     return x*2;
// }
// const output = arr.map(double);
// console.log(output);


// function _map(a,f){
//     var b = [];
//     for(let i = 0; i < a.length; i++){
//         b.push(f(a[i]));
//     }
//     return b;
// }


// console.log(_map(arr,double));


// obj = {
//     a:[1,2,3]
// }


// pass by value

// a  = 5;
// b = a;
// b = 10;

// console.log(a);

// pass by reference

let obj = {
    a:1,
    b:2,
    c:{
        n:6,
        m:7
    }
}


// console.log(obj.b) 

// obj2 = obj;

// obj.b=5






// console.log(obj.b) 

// console.log(obj2.b)

let obj2 = {...obj};
console.log(obj.c.n);
obj2.b=15;
obj2.c.n=20
z = obj.c
z.n=25
console.log(obj.c.n);
console.log(z);
// console.log(obj.b);
// console.log(obj.c);



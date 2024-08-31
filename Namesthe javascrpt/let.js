
// let a = 19;
// console.log(a); 

// // let a = 20; Cannot modify let

// var b = 199;
// console.log(b);

// var b = 26;
// console.log(b);

// const c = 2; 
// console.log(c);
// // const c = 20; GIves a type error


// // Block

// if(true) {
//     // Compound statement
//     var d = 76;
//     console.log(d);
// }


// Block Scope
var x = 100;
let y = 200;
const z = 300;

{
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x);
    console.log(y);
    console.log(z);

}
// Cannot access let and const outside block
console.log(x);
console.log(y);
console.log(z);  


const g = 24;
function h() {
    const g = 29;
    console.log(g);
}
h();
console.log(g);

// illegal shadowing

const su = 20;
{
    const su = 99;

    {
        const su = 298;
        console.log(su);
    }
} 

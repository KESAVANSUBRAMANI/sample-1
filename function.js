// function abc(x,y){
//     if ( y==10 ){
//         return x - y;
//     }else{
//     return x + y;
//     }
// }
// var z = abc(30,10);
// console.log(z);

//call back
function abc(k){
    console.log("this is abc");
    k(0);
}
function xyz(){
    console.log("this is xyz");
}
abc(xyz);
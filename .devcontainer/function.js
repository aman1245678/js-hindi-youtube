// function sayName(){
//     console.log("A");
//     console.log("M");
//     console.log("A");
//     console.log("N");
// }
// // function addNumbers(nm1,nm2){
// //     console.log(nm1+nm2);

// // }
// function addNumbers(nm1,nm2){
//     let result = nm1+nm2
//     return result
//     console.log("Aman");
    

// }
// const result = addNumbers(3,5)
// console.log("result",result);

// // addNumbers(3,4)
// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please enter username ");
        
//     }
//     return`${username}just logged in`
// }
// // console.log(loginUserMessage("Aman"));
// console.log(loginUserMessage());

function calculatecartprice(...num1){
    return num1

}
console.log(calculatecartprice(200,300,400));

const user = {
    username: "Aman",
    price: 199
}

function handleobject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
     
}
handleobject(user)

const mynewarr = [200,300,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(mynewarr));


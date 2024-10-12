let myData = new Date()
console.log(myData.toString());
console.log(myData.toDateString());

console.log(myData.toLocaleString());

let  mycreatedate = new Date(2024.,0,12)
console.log(mycreatedate.toDateString());


let timeStamp = Date.now()
console.log(timeStamp);

console.log(Math.floor(Date.now()/1000));
let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());

newdate.toLocaleString('default', {
    weekday: "long",
})



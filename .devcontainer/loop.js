//loops
//For
// for (let index = 1; index <= 11; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("best");
        
//     }
//     console.log(element);
    
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//        //console.log(`inner loop value ${j} and inner loop ${i}`);
//       // console.log(i + '*' + '=' + 1*j );
       
        
//     }
    
    
// }
// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }
// //break continiue
// for (let index = 1; index <= 20; index++) {
//     if(index == 6){
//         console.log(`Detected 6`);
//         continue 
        
//     }
//    console.log(`valueof ${index}`);
   
    
// }


// let index = 0
// while (index <= 20) {
//     console.log(`value of index is ${index}`);
//     index = index + 1
    
// }
// let myArray = ["Aman", "Kumar","Safe"]

// let arr = 0

// while(arr < myArray.length ) {
    
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
    
// }

// let score = 1

// do{
//     console.log(`score is ${score}`);
//     score++
    
// } while(score <= 10)

//for of

const arr = [1,2,3,4,5,6]
for (const num of arr){
    console.log(num);
    
}
const greeting = " hello world"
for (const greet of greeting){
    console.log(`each char is ${greet}`);
    
}
//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA',"United state of america")
map.set('fr',"France")
map.set('fr',"France")
//console.log(map);

for (const [key,value] of map){
    console.log(key ,':-',value);
    
}
// const myobject = {
//     'game1': 'NFS',
//     'game2': 'kfs'
// }
// for (const [key , value] of myobject) {
//     console.log(key,':-',value);
    
// }
// const myobject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swif: "swift by apple"

// }
// for (const key in myobject){
//     console.log(`${key} shortcut is for ${myobject[key]} `);
    
// }
// const programming = ["js", "rb", "py" ,"java", "cpp"]

// for (const key in programming){
//     console.log(programming[key]);
    
// }

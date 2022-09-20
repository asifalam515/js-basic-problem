// 1.=>convert radian to degree
function radianToDegree(radian){
    if(typeof radian!="number"){
        return "please enter a number"
    }else{
        const pi=Math.PI;
const ans=parseFloat((radian*(180/pi))).toFixed(2)
return ans;
    }

}
// console.log(radianToDegree(10))


// -------------------
//2.=> JavaScript File checker
function isJavaScriptFile(fileName){
    const last2 = fileName.slice(-3);
    if(last2.includes('.js')){
        return true;
    } else{
        return false;
    }
}
// console.log(isJavaScriptFile('app.js'));


// ---------------
// 3.calculate the total oil price that I have to pay

function oilPrice(dieselQuantity,petrolQuantity,octaneQuantity){
let dieselPrice=dieselQuantity*114;
let petrolPrice=petrolQuantity*130;
let octanePrice=octaneQuantity*135;
const totalPrice=dieselPrice+petrolPrice+octanePrice;
return totalPrice;

}
// console.log(oilPrice(0,2,3))


// ---------------
// 4.public bus fare





function publicBusFare(peoples){
 const busRemaining=peoples%50;
 const microbusRemaining=busRemaining%11
 const publicBusFare=microbusRemaining*250
 return publicBusFare;
}
// console.log(publicBusFare(365));

// ---------------------
// 5
/* 
check best friend

*/
function isBestFriend(firstPerson,secondPerson){
if((firstPerson.name === secondPerson.friend) && (firstPerson.friend ===secondPerson.name)){
return true;
} else{
    return false;
}

}
const firstPerson={ name: "doe", friend: "alex" }
const secondPerson={ name: "john", friend: "doe" }
console.log(isBestFriend(firstPerson,secondPerson))
// 1.=>convert radian to degree
function radianToDegree(radian){
const pi=Math.PI;
const ans=parseFloat((radian*(180/pi))).toFixed(2)
return ans;

}
// console.log(radianToDegree(10))



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

// 3.calculate the total oil price that I have to pay
/* 
diesel ---=>114
petrol---=>130
octane ---=>135
*/
function oilPrice(dieselQuantity,petrolQuantity,octaneQuantity){
let dieselPrice=dieselQuantity*114;
let petrolPrice=petrolQuantity*130;
let octanePrice=octaneQuantity*135;
const totalPrice=dieselPrice+petrolPrice+octanePrice;
return totalPrice;

}
console.log(oilPrice(0,2,3))
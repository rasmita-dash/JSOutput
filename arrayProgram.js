//********Get the 1st missing number in sorted odd numbers array************* */
function getMissingElement(inputArr){
    for(let i = 0; i < inputArr.length-1; i){
        if(inputArr[i] + 2 != inputArr[i+1]){
            console.log(inputArr[i] +2);
            return inputArr[i] + 2;
        }
    }
}
getMissingElement([5,7,9,11,15,17]);


//*********************************
// map returns a new array with the results of the function, 
// while forEach does not return anything and only modifies the original array.
//********** */ */

// //**************Maximum value in Array************ */
// function getMaxValue(arr){
//     return Math.max(...arr);
// }
// function getMaxValue(arr){
//     // return Math.max(...arr);
//     let maxVal = arr[0];
//     for (el of arr){
//         if(el>maxVal){
//             maxVal=el;
//         }
//     }
//     return maxVal;
// }
// console.log(getMaxValue([5,2,8,10,3,7]));

// //**********************Max Value in 2D array************** */

// function getMaxValuein2D(arr){
//     let maxVal = arr[0][0];
//     for (let arr1 of arr){
//         for (let e of arr1){
//             if(maxVal< e){
//                 maxVal=e;
//             }
//         }
//     }
//     return maxVal;
// }

// console.log(getMaxValuein2D([[10,1,2],[1,2,3],[2,24,4],[5,7]]));

// //**********************Min Value in Multi dimensional Array************** */
// let maxVal = 0;
// function getMaxValMatrix(arr){    
//     for (let e of arr){
//         if(Array.isArray(e)){
//             getMaxValMatrix(e)
//         }else{
//             if(maxVal< e){
//                 maxVal=e;
//             }
//         }     
//     }
//     return maxVal;
// }
// console.log(getMaxValMatrix([[10,[17,19],1,2],[1,[11,25,78],2,3],[2,24,4],[5,7]]));

// //*****************MergeSortedArraysAndSort********************** */
// function mergeAndSortAsc(arr1, arr2){
//     return [...arr1, ...arr2].sort((a,b)=> a-b);
// }
// function mergeAndSortDesc(arr1, arr2){
//     return [...arr1, ...arr2].sort((a,b)=> b-a);
// }
// console.log(mergeAndSortAsc([1,6,8],[0,2,3,9]));
// console.log(mergeAndSortDesc([1,6,8],[0,2,3,9]));

// //****************************************InFlat 2D array**************** */

// function inflat2DArray(arr){
//     let inflatArr =[];
//     for (let arr1 of arr){
//         inflatArr = [...inflatArr, ...arr1];
//     }
//     return inflatArr;
// }
// console.log([[1,2], [3,4,5],[6,7]]);
// console.log(inflat2DArray([[1,2], [3,4,5],[6,7]]));

// function inFlat (arr, depth){
//     let inflatArr =[];
//     for (let el of arr){
//         if(Array.isArray(el) && depth > 0){
//             inflatArr.push(...inFlat(el, depth-1));
//         }
//         else{
//             inflatArr.push(el);
//         }
//     }
//     return inflatArr;
// }

// console.log([[1,2], [3,4,5,[4,0]],[6,7]]);
// console.log(inFlat([[1,2], [3,4,5,[4,0, [78,90, [6,0]]]],[6,7]],5));

// //***********************************Array with unique elements********* */

// function uniqueElements(arr){
//     return Array.from(new Set(arr));
// }
// console.log(uniqueElements([1,11,2,1,2,3,23,23,1]));

//Recursive
// let elSet= new Set();
// function uniqueEle(arr){
//     for (let el of arr){
//         if(Array.isArray(el)){
//             elSet.add(...uniqueEle(el));
//         }
//         else{
//             elSet.add(el);
//         }
//     }
//     return Array.from(elSet);
// }

// console.log([[1,2,4,5], [3,4,5,1,2,[4,0]],[6,7]]);
// console.log(uniqueEle([[1,2,4,5], [3,4,5,1,2,[4,0]],[6,7]]));

// //*********************************Sum of array elements ******************** */
// function getArraySum(arr){
//     return arr.reduce((sum,num) => sum+num);
// }

// console.log(getArraySum([1,3,2,5,4,9,1]));

// //************************************Count Char Occurence***************** */
// let charCount={};
// function getCharOccure(arr){
//     for(let e of arr){
//         if (Array.isArray(e)){
//             getCharOccure(e);
//         } else{
//             charCount[e]=(charCount[e] || 0) + 1;
//         }
//     }
//     return charCount;
// }
// console.log(getCharOccure([1,1,[1,4,7,4,1],2,2,3,2,1]));

// function getCharOccurence(arr){
//     let charCount={};
//     for (let e of arr){
//         charCount[e] = (charCount[e] || 0) + 1;
//     }
//     return charCount;
// }
// console.log(getCharOccurence([1,1,2,2,3,2,1]));

// //************************map, filter, reduce*************************************** */
// var list=[
//     {    firstname:"Satya", lastname:"Dash", age:37},
//     {    firstname:"Sasmita", lastname:"Dash", age:36},
//     {    firstname:"Rasmita", lastname:"Dash", age:32},
//     {    firstname:"Surya", lastname:"Dash", age:28},
//     {    firstname:"Sandeep", lastname:"Patro", age:44},
//     {    firstname:"Subhalaxmi", lastname:"Palo", age:28},
//     {    firstname:"Debasish", lastname:"Misra", age:33},
//     {    firstname:"Subhadarshini", lastname:"Mohapatro", age:25}
// ];
// list.map(user=> user.fullName= user.firstname + " "+ user.lastname);
// console.log(list);

// var list_35=list.filter(user=> user.age > 35);
// console.log(list_35);

// // var totalAge = list.reduce(function(cum, curr){
// //     cum= cum+curr.age;
// //     return cum;
// // }, 0);

// var totalAge = list.reduce((cum, user, index) => {
//     cum= cum+user.age;
//     return cum;
// }, 0);

// console.log(totalAge);
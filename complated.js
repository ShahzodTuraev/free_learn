const arr = [ "excavate", "endure", "desire", "screen", "theater", "excess", "night"]
const arr1 = ["no", "dog", "on", "good"]
const arr4 = ["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]

// t, p, v, g, l, m, p
// e, e, w, e, 
function solution(words) {
    const firstLetter = words.map((ele)=>(ele[0]));
    const lastLetter = words.map((ele)=>(ele[ele.length-1]));
    const checkFirstLetter = firstLetter.map((ele)=>(
        lastLetter.includes(ele)
        ));
        const checkLastLetter = lastLetter.map((ele)=>(
            firstLetter.includes(ele)
            ))
            if(checkFirstLetter.filter(ele => ele == false).length == checkLastLetter.filter(ele => ele == false).length &&
            checkLastLetter.filter(ele => ele == false).length <= 1) return true
            else{return false}
        }
        
        console.log(solution(arr4));
        // first letters: e, e, d, s, t, e, n
        // last letters: e, e, e, n, r, s, t
        
        console.log(firstLetter);
        console.log(lastLetter);
        
// console.log(checkFirstLetter);
// console.log(checkLastLetter.filter(ele => ele == false));


// =============================================================================================

const text = "((1)23(45))(aB)";
// const order = 0;
function solve(str,idx){
    if(str[idx] == "("){
        const arr = text.split("").map((ele) => {
            if(ele == "(") return 1
            else if(ele == ")") return -1;
            else return 0
        })
        let new_arr = arr.slice(idx);
        console.log(new_arr);
        let sum_arr = [];
        let check_arr = [];
        for(let i=0; i< new_arr.length; i++){
            sum_arr.push(new_arr[i])
            check_arr.push(sum_arr.reduce((accum, curVal)=> accum + curVal, 0));
        }
        console.log(check_arr);
        console.log(check_arr.indexOf(0) + idx);
        
        }else{
            console.log(-1);
        }
   }

console.log(solve("((1)23(45))(aB)", 0))

// =================================================================================================

// const integers = [160, 3, 1719, 19, 11, 13, -21];

// const even = integers.filter((ele)=>(ele % 2 == 0))
// const odd = integers.filter((ele)=>(ele % 2 !== 0))
// console.log(even.length == 1 ? even[0] : odd[0] );

// =================================================================================================
// BERILGAN SONGACHA  3GA VA 5 GA BOLINADIGAN SONLAR YIGINDISI 
// const solution = (number) => {
//     const result = 3 * (1 + Math.floor((number - 1) / 3)) * Math.floor((number - 1) / 3) +
//                     5 * (1 + Math.floor((number - 1) / 5)) * Math.floor((number - 1) / 5) -
//                     15 * (1 + Math.floor((number - 1) / 15)) * Math.floor((number - 1) / 15) 
//     return result / 2
// }

// console.log(solution(6));

// =================================================================================================

// Case Reversal of Consecutive Duplicates

// function reverseCase(string) {
    //     return string.split('').map((ele, index, arr)=>{
        //         if(ele == arr[index - 1] ||ele == arr[index + 1]){
            //             if(ele.toUpperCase() == ele) return ele.toLowerCase()
            //             else return ele.toUpperCase()
            //         }else{
                //             return ele
                //         }
                //     }).join('');
                //     }
                
                
// console.log(reverseCase('HeLlo World'));

// =================================================================================================
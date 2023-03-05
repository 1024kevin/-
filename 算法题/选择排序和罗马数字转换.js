// 笔试题1
// function sort(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] >= nums[j]) {
//                 let middle
//                 middle = nums[j]
//                 nums[j] = nums[i]
//                 nums[i] = middle
//             }

//         }


//     }
//     return nums
// }
// sort([2, 0, 2, 1, 1, 0])



//2
// var romanObj = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000};
// var romanToInt = function(s) {
//     let max = 0;
//     let result = 0;
//     for (var i = s.length - 1; i >= 0; i--) {
//         var currRoman = s[i];
//         var currVal = romanObj[currRoman];
//         result += currVal >= max ? currVal : -currVal;
//         max = Math.max(max, currVal);
//     }
//     console.log(result);
//     return result;
// };
// romanToInt('M')
// romanToInt('CD')
// romanToInt('IDMI')

function findMostFrequentLetter(str) {
    let charMap = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }
    console.log(maxChar);
    return maxChar;
}
findMostFrequentLetter('aaAaaaaaAbBBB')
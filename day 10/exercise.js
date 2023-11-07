// pertanyaan 1

function titleToNumber(columnTitle) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let columnNumber = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const char = columnTitle[i];
        const charIndex = alphabet.indexOf(char) + 1 ; // supaya mulai dari 1
        columnNumber = columnNumber * 26 + charIndex; // huruf ke-0 kelipatan 26
    }

    return columnNumber;
} 

console.log(titleToNumber("AB")); // result : 28


// pertanyaan 2 --> blm ngerti

// pertanyaan 3

function isAnagram(s, t) {
if (s.length !== t.length) {
return false;
}

const sortedS = s.split('').sort().join('')
const sortedT = t.split('').sort().join('')

if (sortedS === sortedT) {
    return "true"
} else {
    return "false"
}
}

console.log(isAnagram("anagram", "naragam")) // result : true
console.log(isAnagram("rat", "car")) // result : false


// pertanyaan 4 (dibantu chatgpt)
function climbStairs(n) {
    if (n <= 2) {
        return n;
    }

    let prev = 1;
    let current = 2;

    for (let i = 3; i <= n; i++) {
        const next = prev + current; // next = prev(1) + current (2) // (2 + 3) // (3 + 5) 
        prev = current; // prev = 2 // 3 // 5
        current = next; // current = 3 // 5 // 8
    }

    return current;
}

console.log(climbStairs(2)); // Output: 2
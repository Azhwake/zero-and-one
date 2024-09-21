// Good Luck 💪🏾
function ZeroAndOne(arr) {
    return arr
        .filter(item => item === 'Zero' || item === 'One')  // Filter for 'Zero' or 'One' only
        .map(item => item === 'Zero' ? '0' : '1')           // Convert 'Zero' to '0' and 'One' to '1'
        .join('');                                          // Join the result into a string
}

// Test cases
console.log(ZeroAndOne(["one", "Zero", "Zero", "One"]));   // ➞ "001"
console.log(ZeroAndOne(["Zero", "ONE", "one", "Zero"]));   // ➞ "00"

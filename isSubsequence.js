// Write a function called which takes in two strings and checks whether the characters in
// in the first string from a subsequence of the character in the second string. In other
// words, the function should check whether the characters in the first string appear 
// somewhere in the second string, without their order changing.

// isSubsequence('hello','hello world); >> true
// isSubsequence('sing','sting'); >> true
// isSubsequence('abc','abracadabra'); >> true
// isSubsequence('abc','acb'); >> false

// 'h e l l o','h e l l o   w o r l d'
//  i           j
//    i           j
//      i           j
//        i           j
//          i           j
// true

// 'a b c','a c b'
//  i       j
//    i       j
// false

const isSubsequence = (strOne, strTwo) => {

};

isSubsequence('hello', 'hello world');
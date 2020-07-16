// 5 Step : 
// Understand the problem ---->  take two numbers and return its sum.

// Concrete example ----> empty input 

// "hello" ====>  {'h':1, 'e':1, 'l':2, 'o': 1}

// "Hello worldh" ====> {}

// "cbe - 641025" ====> {}


// Break it down ---->  write function and take string as input

// create an empty object

// loop the string for each char

// return obj


function stringCounter(str) {
    const obj = {};
    for (let char of str) {

        char = char.toLowerCase();

        if (/[a-z0-9]/.test(char)) {

            obj[char] = ++obj[char] || 1;
        }

    }

    return obj;
}

// Slove or Simplify ----> 


function alphaNumric(char) {

    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        return false;
    }

    return true;
}

// look back and refactor --------->  





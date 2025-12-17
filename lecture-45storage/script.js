// //stopPropogation eventprop

const key = "name";
const value = "vaibhav";
const value2 = "teju";

localStorage.setItem(key, value);
localStorage.setItem(key, value2); // overwrites vaibhav → teju

localStorage.setItem("key1", "value1");
localStorage.setItem("key2", "value2");
localStorage.setItem("key3", "value3");
localStorage.setItem("key4", "value4");

const str = "a".repeat(1000 * 25 * 1000);
try {
  localStorage.setItem("bigData", str);
} catch (e) {
  console.log("Storage limit exceeded");
}

console.log(localStorage.getItem(key)); // "teju"
console.log(localStorage.length);       // number of keys
console.log(localStorage.key(2));       // key name at index 2
console.log(localStorage.getItem("key1"));

localStorage.clear();

// // when we reopening  the tab
// //reload browser

// // if we want erase data 
// // site data
// // remove Item
// // clear data


// //limitation
// // we not storage more Data ;
// // store a data form of String;
// //QuataExceedError always write a in trycatch block
// // when we write more frequent write operation that will affect the performance;

// //how to check local storage hai ya nahi;
// // we create a function 


// // security


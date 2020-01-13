//c1
// function reverseString(str){
//     return str.split("").reverse().join(""); // phuong thuc split() de chuyen chuoi thanh mang
//                                              // phuong thuc reverse() de dao nguoc mang
//                                              // phuong thuc join() de chuyen mang thanh chuoi
// }
// console.log(reverseString("hello"));

//c2
function reverseString(str){
    let reversed = "";
    for ( let i = str.length(); i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}


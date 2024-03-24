"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    var loginUser = { name: name, email: email, isPaid: isPaid };
    return loginUser;
}
addTwo(3);
getUpper('hello');

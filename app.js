var num1 = 1;
function calculate(num1, num2) {
    return num1 + num2;
}
function getTotal(numbers) {
    var total = numbers.reduce(function (acc, value) { return acc + value; }, 0);
    return total;
}
var user = {
    firstName: "John",
    lastName: "Doe",
    role: "professor"
};
var user1 = {
    name: "Manik",
    age: 21,
    address: "main street"
};
function logIn(userData) {
    return userData;
}
console.log(logIn(user1));
console.log(user.firstName);
console.log(getTotal([5, 6, 8, 7]));
console.log(calculate(num1, 5));

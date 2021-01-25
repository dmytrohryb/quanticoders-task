const first = require("./tasks/first-task")
const second = require("./tasks/second-task")
const third = require("./tasks/third-task")

console.log("First task: " + first(10, 25, 15, 40))
console.log("Second task: " + second(4, 1, 2))
console.log("Third task:")
console.log(third(0.25))
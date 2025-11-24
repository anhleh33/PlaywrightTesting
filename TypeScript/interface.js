// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
console.log("Use Case 1: Defining Object Structures");
console.log("-----------------------------------------");
// Define a function to calculate the area of a shape
function calculateArea(shape) {
    console.log("Calculating area of ".concat(shape.name, "..."));
    console.log("Area: ".concat(shape.area()));
}
// Define a circle object (radius = 2)
var circle = {
    name: "Circle",
    color: "Red",
    area: function() {
        var r = 2;
        return Math.PI * r * r; // πr²
    },
    perimeter: function() {
        var r = 2;
        return 2 * Math.PI * r; // 2πr
    },
};
// Calculate and log the area of the circle
calculateArea(circle);
// Implement calculatePerimeter and use it
function calculatePerimeter(shape) {
    console.log("Calculating perimeter of ".concat(shape.name, "..."));
    return shape.perimeter();
}
console.log("\nUse Case 2: Type-Checking Function Parameters");
console.log("----------------------------------------------");
console.log("Calculating perimeter of a shape...");
console.log("Perimeter: ".concat(calculatePerimeter(circle)));
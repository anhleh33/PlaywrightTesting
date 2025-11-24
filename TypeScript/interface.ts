export {}; // make this file a module

interface Shape {
  name: string;
  color: string;
  area(): number;
  perimeter(): number;
}

console.log("Use Case 1: Defining Object Structures");
console.log("-----------------------------------------");

// Define a function to calculate the area of a shape
function calculateArea(shape: Shape): void {
  console.log(`Calculating area of ${shape.name}...`);
  console.log(`Area: ${shape.area()}`);
}

// Define a circle object (radius = 2)
const circle: Shape = {
  name: "Circle",
  color: "Red",
  area() {
    const r = 2;
    return Math.PI * r * r; // πr²
  },
  perimeter() {
    const r = 2;
    return 2 * Math.PI * r; // 2πr
  },
};

// Calculate and log the area of the circle
calculateArea(circle);

// Implement calculatePerimeter and use it
function calculatePerimeter(shape: Shape): number {
  console.log(`Calculating perimeter of ${shape.name}...`);
  return shape.perimeter();
}

console.log("\nUse Case 2: Type-Checking Function Parameters");
console.log("----------------------------------------------");

console.log("Calculating perimeter of a shape...");
console.log(`Perimeter: ${calculatePerimeter(circle)}`);

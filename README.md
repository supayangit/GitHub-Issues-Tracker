### Questions
- 1️⃣ What is the difference between var, let, and const?
- 2️⃣ What is the spread operator (...)?
- 3️⃣ What is the difference between map(), filter(), and forEach()?
- 4️⃣ What is an arrow function?
- 5️⃣ What are template literals?

### Answers
Here’s a simple and short explanation for each:

1️⃣ Difference between var, let, and const:

var → function-scoped, can be redeclared and updated.
let → block-scoped, can be updated but not redeclared in same scope.
const → block-scoped, cannot be updated or redeclared. Must be initialized.

2️⃣ Spread operator (`...`)
Expands an array or object into individual elements.
Ex:
let arr = [1,2]; let newArr = [...arr,3];

3️⃣ Difference between map(),filter(), and forEach()
map() → returns a new array after transforming items.
filter() → returns a new array with items that pass a condition.
forEach() → just loops over items, doesn’t return anything.

4️⃣ Arrow function
Shorter function syntax using `=>`.
Ex:
const add = (a,b) => a+b;

5️⃣ Template literals
Strings using backticks ` ` that allow variables and multi-line text.
Ex:
let name = "Supayan"; console.log(`Hello ${name}`);

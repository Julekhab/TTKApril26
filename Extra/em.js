const user = {
    name: 'Alice',
    // Normal function

    logNormal() {
        setTimeout(function() {
            console.log('Normal:', this.name); 
        }, 100);
    },
    // Arrow function
    logArrow() {
        setTimeout(() => {
            console.log('Arrow:', this.name); 
        }, 100);
    }
};

user.logNormal(); // Logs: "Normal: undefined" (because setTimeout runs in the global scope)
user.logArrow();  // Logs: "Arrow: Alice" (because it inherits `this` from the logArrow method)

/*
Explanation:

1. An object named user is created.
2. It contains one property: name = "Alice".
3. logNormal() uses a normal function inside setTimeout().
4. Normal functions create their own "this", so this.name is undefined.
5. logArrow() uses an arrow function.
6. Arrow functions use the same "this" as the parent function.
7. Therefore this.name refers to user.name and prints "Alice".

Output:
Normal: undefined
Arrow: Alice
*/
 
// 1. A  const (conditional variable) created user = Alice 
// 2.  logNormal(method) uses a normal function inside setTimeout(100 means execution time shouldn't be more than 100, if its more than 100, it should give an error),function is local function and "this" is undefined.
// 3. logArrow() uses an arrow function, and use the "this" as the parent function, thats why this.name refers to user.name and print as  "Alice".
let add = (a,b) =>  a + b;
console.log(add(2,3));

let greet = (name, timeOfDay) => {
    console.log(`Good ${timeOfDay}, ${name}!`);
};
greet("Alice", "morning");
// Output: Good morning, Alice!
greet("Bob", "evening");
// Output: Good evening, Bob!

let square = num => {
    return num * num;
};
 console.log(square(5)); // Output: 25
 console.log(square(8)); // Output: 64

 let SayHello = () => {
    console.log("Hello there!");
    };  

    SayHello(); // Output: Hello there!

let person = {
    name: "John",       
    age: 30,
    introduce: () => {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }   
};
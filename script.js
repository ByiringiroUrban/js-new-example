


//  RANDOM PASSWORD CODES

// function generatePassword(length, includeLowerCase,includeUpperCase, includeSymbols){
    
//     const lowecaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
//     const numberChars = "1234567890";
//     const symbolsChars = "!@#$%^&*()_+=-;:.,'";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowerCase ? lowecaseChars : "";
//     allowedChars += includeUpperCase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : ""; 
//     allowedChars += includeSymbols ? symbolsChars : "";

//    if(length <= 0){
//     return `(password length must be at least 1)`;
//    }
//    if(allowedChars.length === 0){
//     return `(At reast 1 set of characher needs to be selected)`;
//    }

//    for(let i = 0; i < length; i++){
//     const randomIndex = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randomIndex];
//    }
    
    
//     return password; 
// }

// const passwordLength = 12;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeSymbols = true;
// const includeNumbers = true;

// const password = generatePassword(passwordLength, 
//                                  includeLowerCase, 
//                                 includeUpperCase,
//                                 includeNumbers, 
//                                 includeSymbols
// );

// console.log(`generated password : ${password}`);



//         // CALL BACK FUNCTION

// sum(total, 5, 7)

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result)
//  }

// function displayConsole(result){
//     console.log(result);
// }

// function total(result){
//     document.getElementById("myH1").textContent = result;
// }


// const mySubmit = document.getElementById("mySubmit");
// const myText = document.getElementById("myText");
// const myH1 = document.getElementById("myH1");
// // let age; 

// function myButton(){
//     // age = myText.Value;
//     // age = Number(age);

//     if(myText.value >= 100){
//         myH1.textContent = `yor are too enough allowed to drive`;
//     }else if(myText.value >= 18){
//         myH1.textContent = `you are NOT allowed`;
//     }else if(myText.value <= 0){
//         myH1.textContent = `your age can't be bellow 0!`;
//     }else if(myText.value === 0){
//         myH1.textContent = `you are still kid, you cant enter`;
//     }else{
//         myH1.textContent = `you are NOT allowed to drive`;
//     }  
//     }  



//                 // FOREACH METHOD  
            
// let array = [22,33,44,55,66,77,88];
// function displayArray(element){
//     console.log (element + element  + 2);
// }
// let result = array.forEach(displayArray)
// console.log(result);


// let num = [1, 2,3, 4, 5, 6];
// num.forEach(display)
// function display(element){
//     console.log(element)
// }

// function square(element, index, array){
//     console.log(array[index] = Math.pow(element, 2));
//  }
//  let numbers = [1, 2, 3, 4, 5, 6];
//   numbers.forEach(square);
 
 
//   function triple (index, array, element){
//     console.log(emlement[array] = index * 3)
//   }
//   let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// function display(element, index, array){
//     console.log(array[index] = element.toUpperCase())
// }
// let fruits = ["mango", "banana", "orange", "apple"];
// fruits.forEach(display);

// function capitalize(element, index, array){
//     console.log(array[index] = element.charAt(0).toUpperCase() + element.slice(1))
// }
// let fruits = ["mango", "orange", "banana", "apple"];
// fruits.forEach(capitalize);

// const num = [1, 2, 3, 4, 5, 6];
// function square(element){
//     return Math.pow(element, 3);
// }
// const result = num.map(square);
// console.log(result);



// let names = ["gentil", "urban", "lena"];
// names.forEach(capitalize);
// function capitalize(element, index, array){
//     console.log(array[index] = element.charAt(0).toUpperCase() + element.slice(1));
// }

//                 // MAP()  METHOD 

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// function formatDate(date){
//     const parts = date.split("-")
//     return `${parts[1]}/ ${parts[2]}/ ${parts[0]}`;
// }
// const result = dates.map(formatDate);
// console.log(result);

//                 // FILTER ()  METHOD

// function isEven(arr){
//     if(arr % 2 !== 0){
//         return true;
//     }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.filter(isEven);
// console.log(result);


// function isOdd(arr){
//     if(arr % 2 !== 0){
//         return true;
//     }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.filter(isOdd);
// console.log(result);



// function isAdult(element){
//     return element >= 18;
// }
// const ages = [17, 18, 19, 20, 45, 12, 21, 22, 22];
// const result = ages.filter(isAdult);
// console.log(result);

// OTHER WAYS

// const ages = [17, 18, 19, 20, 45, 12, 21, 22, 22];
// const result = ages.filter(n => n >= 18);
// console.log(result);

// const words = ["coconut", "banana", "orange", "apple", "pomegranate", "kiwi", "graundnut"];
// const result = words.filter(n => n.length >= 6);
// console.log(result);

// BREAK && CONTINUE

// let text = "";

// for(var i = 0; i < 10; i++){
//     if(i === 5){
//         break
//     }
//     text += i;
// }
// console.log(text);

// // output = 01234

// for(var i = 0; i < 10; i++){
//     if(i === 5){
//         continue;
//     }
//     text += i;
// }
// console.log(text);

// // output = 012346789
 
// //  REDUCE()  METHOD

// function sum(accumulator, element){
//     return accumulator + element;
// }
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const result = numbers.reduce(sum)
// console.log(` your total price is $${result.toFixed(3)}`);


// const grades = [65, 75, 97, 55, 47, 89, 90, 87];
// const result = grades.reduce(function(accumurator, element){
//     return Math.max(accumurator, element);
// })
// console.log(result);

// output = 97 as maximim number in array

// //  ARROW FUNCTION


// const sum = (x, y, z = 50) => {
//     console.log(x + " " + y + " " + z);
// }
// sum(30, 40);

// setTimeout( () => console.log("Hello Urban pac"), 3000) 


// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(ele => Math.pow(ele, 2));
// console.log(result);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = num.filter(n => n % 2 === 0);
// console.log(result);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = num.reduce((n, m) => n + m);
// console.log(result)


//                     // OBJECTS

// const urban = {
//     firstName:"Urban",
//     lastName:"Pac",
//     age: 22,
//     isEmployed:false,
//     sayHello: () => console.log("hello urban pac"),
//     sayEat: () => console.log("im eating coconut"),
// }
// console.log(urban.firstName);
// console.log(urban.lastName);
// console.log(urban.age);
// console.log(urban.isEmployed);
// console.log(urban.sayHello())
// console.log(urban.sayEat())


//                 // CLASS IN JS

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = Math.min(...num);
// console.log(result)

// class product{
//     constructor(name, price){
//       this.name = name;
//       this.price = price;
//     }
  
//   displayProduct(){
//     console.log(`product: ${this.name}`);
//     console.log(`price: $${this.price.toFixed(2)}`);
//   }
//   }
//   const product1 = new product("shirt", 19.99);
//   const product2 = new product("trousel", 30.01);
//   product1.displayProduct();
//   product2.displayProduct();

// class product{
//     constructor(name, price, place){
//         this.name = name;
//         this.price = price;
//         this.place = place;
//     }
//     displayProduct(){
//         console.log(`(1). product name: ${this.name}`);
//         console.log(`product price: $${this.price.toFixed(2)}`);
//         console.log(`product place: ${this.place}`);
//     }
//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const product1 = new product(" T - shirt", 20, "kacyiru");
// const product2 = new product("Trousel", 30.33, "kicukiro");
// const product3 = new product("Underware", 52.44, "kanazi");
// const product4 = new product("T - shirt", 49.00, "karuruma");
// const product5 = new product("Bag", 78.55, "kimironko");

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();
// product4.displayProduct();
// product5.displayProduct();


// const salesTax = 0.5;
// const total = product1.calculateTotal(salesTax);
// console.log(`Total (with Tax) to product1: $${total.toFixed(2)}`);



//             //  STATIC IN JS


// class MathUtil{
//     static PI = 3.14159;

//     static getDimeter(radius){
//         return radius * 2;
//     }

//     static getCircumuference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }
// console.log(MathUtil.getDimeter(10));
// console.log(MathUtil.getCircumuference(10));
// console.log(MathUtil.getArea(10));


// class User{
//     static userCount = 0;
//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }
//     sayHello(){
//        return`hello my username is: ${this.username}`;
       
//     }
// }
// const User1 = new User("Urban Byiringiro Bobola");
// const User2 = new User("Pac");
// const User3 = new User("Bobola");

// console.log(User1.sayHello());
// console.log(User2.sayHello());
// console.log(User3.sayHello());
// console.log(User.userCount);



//                 // INHERITANCE

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal{
//     name = "rabbit";
// }
// class Fish extends Animal{
//     name = "fish";
// }
// class Bird extends Animal{
//     name = "bird";
// }
// const rabbit = new Rabbit();
// const fish = new Fish();
// const bird = new Bird();


// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// fish.sleep();
// fish.eat();
// bird.eat();
// bird.sleep();


// class Animal{
//     constructor(name, age){
//         this.name = name; 
//         this.age = age;
//     }
//     move(speed){
//         console.log(`this ${this.name} can move at speed of ${this.run} km in 1 minute`);
//         console.log(`this ${this.name} can move at speed of ${this.swim} km in 1 minute`)
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, run){
//     super(name, age);
//     this.run = run;
//     }
//     runing(){
//         console.log(`this ${this.name} can run fastly`);
//         super.move(this.run);
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swim){
//         super(name, age);
//         this.swim = swim;
//     }
//     swimming(){
//         console.log(`this ${this.name} can swim fastly`);
//         super.move(this.swim);
//     }
// }
// const rabbit = new Rabbit("rabbit", 1, 30);
// const fish = new Fish("fish", 2, 33);
// rabbit.runing() 
// fish.swimming() 



// console.log(rabbit.name);
// console.log(rabbit.age)
// console.log(rabbit.run)
// console.log(fish.name)
// console.log(fish.age)
// console.log(fish.swim)



// SETTER AND GETTER

//  class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width (newWidth){
//       if(newWidth > 0){
//         this._width = newWidth;
//       }else{
//         console.error("Width must be positive number");
//       }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }else{
//             console.error("Height must be positive number")
//         }
//     }
//     get width(){
//         return `${this._width.toFixed(2)} cm` ;
//     }
//     get height(){
//         return `${this._height.toFixed(2)} cm`;
//     }
//     get area(){
//         return `${(this._width  * this._height).toFixed(1)} cm ^2` ;
//     }
//  }
//  const rectangle = new Rectangle(2, 4);
//  rectangle.width = 4;
// rectangle.height = 10;
// console.log(rectangle.area)

//  console.log(rectangle.width);
//  console.log(rectangle.height);


// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirstname){
//         if(typeof newFirstname === "string" && newFirstname.length > 0){
//             this._firstName = newFirstname;
//         }else{
//             console.error("fist name must be not empty sring");
//         }
//     }
//     set lastName(newLastname){
//         if(typeof newLastname === "string" && newLastname.length > 0){
//             this._lastName = newLastname;
//         }
//         else{
//             console.error("last name must be not empty string");
//         }
//     }
//     set age (newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge;
//         }else{
//             console.error("number must not be negative");
//         }
//     }
//      get firstName(){
//         return this._firstName;
//      }
//      get lastName(){
//          return this._lastName;
//      }
//      get age(){
//          return this._age;
//      }
// }


// const result = new Person("urban", "pac", 22);
// console.log(result.firstName);
// console.log(result.lastName);
// console.log(result.age);


                    // DECONSTRUCTING
                    // 1.  swap value of two variables

                    // let a = 1;
                    // let b = 2;

                    // [a, b] = [b, a];
                    // console.log(a);
                    // console.log(b);

                // swap 2 element in an array


// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);


                            // 3. ASSIGN ARRAY ELEMENT TO VALIABLES


// const colors = ["red", "green", "blue", "black", "white", "urbanColor", "gentilColor"];
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


                        //4.  EXTRACT VALUES FROM AN OBJECT


// const person = {
//     firstName: "urban",
//     lastName: "pac",
//     age: 22, 
//     job: "Software developer",
// }
// const person2 = {
//     firstName: "Gentil",
//     lastName: "Mugisha",
//     age: 21, 

// }
// const{ firstName, lastName, age, job = "software developer"} = person2;


// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


                    // DESTRUCTURE IN FUNCTION PARAMENTER
// function displayPerson({firstName, lastName, age, job = "WordPress"}){
//     console.log(`your name is: ${firstName} ${lastName}`);
//     console.log(`your age is: ${age} years old`);
//     console.log(`you are working with job of: ${job}`)

// }


// const person = {
//     firstName: "URBAN",
//     lastName: "BYIRINGIRO",
//     age: 22,
//     job: "SOFTWARE DEVELOPER",
// }
// const person2 = {
//     firstName: "Gentil", 
//     lastName: "Mugisha",
//     age: 22,
// }
// displayPerson(person2)


                        // NESTED OBJECT


    // const person = {
    //     fullName: "urban pac",
    //     age: 22,
    //     isStudent: true,
    //     hobbies:["football", "cooking", "playing valeball", "watching movies"],
    //     adress:{
    //         street:"kacyiru 123 st kg",
    //         city: "kigali", 
    //         country: "Rwanda",
    //         continentAdress: "East Africa",

    //     }
    // }
    // console.log(person.fullName);
    // console.log(person.age);
    // console.log(person.isStudent);
    // console.log(person.hobbies[0]);
    // console.log(person.adress.street);

    // // by using for loop

    // for(const property in person.adress){
    //     console.log(person.adress[property]);
    // }

//     class Person{
//         constructor(name, age, ...adress){
//             this.name = name;
//             this.age = age;
//             this.adress = new Adress(...adress);
//         }
//     }
//     class Adress{
//         constructor(street, city, country){
//             this.street = street;
//             this.city = city; 
//             this.country = country;
//         }
//     }

// const person1 = new Person("urban pac", 22, "kg-123-kacyiru st",
//                                                  "Kigali",
//                                                  "Rwanda");


// const person2 = new Person("Gentil Mugisha", 21, "kg-125-kacyiru st",
//                                                 "Kigali",
//                                                 "Rwanda");

// const person3 = new Person("Lena Paolla", 22, "kg-123-Rusizi st",
//                                                 "Rusizi",
//                                                 "Rwanda");


// console.log(person3.adress.street)


                            // ARRAY OBJECT

// const fruits = [{name:"apple",color:"red", length:12.5},
//                 {name:"mango",color:"yellow", length:22.5},
//                 {name:"coconut",color:"white", length:54.0},
//                 {name:"banana",color:"yellow", length:17.5},
//                 {name:"orange",color:"yellow", length:10.5}];

//                 //  fruits.splice(0,2);
//                 console.log(fruits[4].length);

//                      BY USING FOREACH METHOD

// const fruits = [{name:"apple",color:"red", length:12.5},
//                 {name:"mango",color:"yellow", length:22.5},
//                 {name:"coconut",color:"white", length:54.0},
//                 {name:"banana",color:"yellow", length:17.5},
//                 {name:"orange",color:"yellow", length:10.5}];


//                 fruits.forEach((fruit) => console.log(fruit.name))

                            // BY USING MAP METHOD
// const fruits = [{name:"apple",color:"red", length:12.5},
//     {name:"mango",color:"yellow", length:22.5},
//     {name:"coconut",color:"white", length:54.0},
//     {name:"banana",color:"yellow", length:17.5},
//     {name:"orange",color:"yellow", length:10.5}];


//    const result = fruits.map(fruit => fruit.name);
//    console.log(result)


                // BY USING FILTER METHOD

// const fruits = [{name:"apple",color:"red", length:12.5},
//     {name:"mango",color:"yellow", length:22.5},
//     {name:"coconut",color:"white", length:54.0},
//     {name:"banana",color:"yellow", length:17.5},
//     {name:"orange",color:"yellow", length:10.5}];


//    const result = fruits.filter(fruit => fruit.length > 15);
//    console.log(result);


//                          BY USING REDUCE METHOD


// const fruits = [{name:"apple",color:"red", length:12.5},
//     {name:"mango",color:"yellow", length:22.5},
//     {name:"coconut",color:"white", length:54.0},
//     {name:"banana",color:"yellow", length:17.5},
//     {name:"orange",color:"yellow", length:10.5}];

//     // fruits have max length

//    const result = fruits.reduce((max, fruit) => fruit.length > max.length ? 
//                                                 fruit : max);
//    console.log(result);

//         // fruits have main length

//         const result2 = fruits.reduce((min, fruit) => fruit.length < min.length ? 
//         fruit : min);
// console.log(result2);
            

                // SORT() METHOD


// const num = [1, 20 , 39, 2, 3, 4, 77, 4, 893, 33, 22, 11, 89, 45, -98];
// num.sort((a, b) => a - b);
// console.log(num);


// const person  = [{name:"Urban", age: 22, Gpa: 4.0},
//                 {name:"Gentil", age: 21, Gpa: 3.0},
//                 {name:"Lena", age: 12, Gpa: 3.4},
//                 {name:"Gaella", age: 10, Gpa: 2.0},
//                 {name:"Bertin", age: 18, Gpa: 3.1}];


// person.sort((a, b) => a.name.localeCompare(b.name));
// console.log(person);


                // SHUFFLE ARRAY


// const cards = ['A',2 ,3, 4, 5, 6, 7, 8, 9, 10, 'K','J', 'Q'];
// console.log(cards);
// shuffle(cards)

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));
//         [array[i], array[random]] = [array[random], array[i]]
//     }
// }

                        // DATE OBJECT


                        // var date = new Date();

                        // const year = date.getFullYear();
                        // const month = date.getMonth();
                        // const day = date.getDay();
                        // const hour = date.getHours()
                        // const minute = date.getMinutes()
                        // const second = date.getSeconds()

                        

// const date1 = new Date("2024-01-01");
// const date2 = new Date("2025-01-01");

// if(date2 >= date1){
//     console.log("Happy new Year");
// }


                    // CLOSURE METHOD



// function outer(){
//     let message = "hello urban";
//     function inner(){
//         console.log(message);
//     }
//     inner()
// }
// outer()


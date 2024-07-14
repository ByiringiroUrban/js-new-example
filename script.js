// function sum(arrays){
//     let sum = 0
//     for(let array of arrays){
//         sum += array
//     }
//     return sum
// }
// const num = [1, 2, 3, 4, 5];
// console.log(sum(num))


// function max(numbers){
//     let max = [];
//     for( let number of numbers){
//         if(number >= max){
//             max = number;
//         }
//     }
//     return max;
// }
//  const num = [1, 2, 3, 4, 5];
//  console.log(max(num));

// let a = 0;
// for(let i = 0; i < 10; i++){
//     a += i;
//     console.log(a)
// }

// const person = {
//     name: "urban", 
//     eat: "meat",
//     sayhello: () => console.log(`${person.name} is eating ${person.eat}`)
// }
// person.sayhello()


// class product{
//     constructor(name, price){
//         this.name = name, 
//         this.price = price
//     }
//     displayProduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`price: ${this.price}`);
//     }
// }
// const product1 = new product("T-Shirt", "99.9$");
// const product2 = new product("Short trousel", "109.9$");

// product2.displayProduct();

                    // STATIC
// class mathUtil{
//     static PI = 3.14159;
//     static getDiameter(radius){
//         return radius * 2
//     }
// }
// console.log(mathUtil.getDiameter(20))

// class mathUtil{
//     static PI = 3.14159;
//     static getCircumustance(radius){
//         return radius * 2 * this.PI
//     }
// }
// console.log(mathUtil.getCircumustance(10));

// class mathUtil{
//     static PI = 3.14159;
//     static getArea(radius){
//         return radius * radius * this.PI
//     }
// }
// const result = mathUtil.getArea(10);
// console.log(result)

// class user{
//     static userCount = 0;
//     constructor(username, year){
//         this.username = username;
//         this.year = year;
//         user.username++;
//     }
// }
// const user1 = new user("urban", 22);
// const user2 = new user("Gentil");
// console.log(user1.username, user1.year);
//  console.log(user2.username);


// class product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`name: ${this.name}`);
//         console.log(`price: ${this.price}`);
//     }
// }
// const product1 = new product("T-shirt", "33$");
// product1.displayProduct();

// class perimeter{
//     static PI = 3.14159;
//     static getCircumuference(radius){
//         return radius * 2 * this.PI
//     }
// }
// console.log(perimeter.getCircumuference(10));


// class Animals{
   
// }
// class Rabbit extends Animals{
//     constructor(name, age, run){
//         super(name, age, run);
//         this.name = name;
//         this.age = age;
//         this.run = run;
//     }
// }
// class Fish extends Animals{
//     constructor(name, age, swim){
//         super(name, age, swim);
//         this.name = name;
//         this.age = age;
//         this.swim = swim;
//     }
// }
// const rabbit = new Rabbit("ipusi", 2, "more run");
// const fish = new Fish("tilapia", 1, "more swimming");

// console.log(rabbit.name)


// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }else{
//             console.error("width always must be a positive number");
//         }
//     }
//     set height (newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }else{
//             console.error("height must be always a positive number");
//         }
//     }
//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
//     get area(){
//         return this._width * this._height;
//     }
// }
// const rectangle = new Rectangle(3, 4);
// console.log(rectangle.area);

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName
//         }else{
//             console.error("first Name must not be a numbers but must be a string")
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }else{
//             console.error("last Name must not be a numbers but must be a string")
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge
//         }else{
//             console.error("age must be a positive number only")
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get age(){
//         return this._age;
//     }
// }
// const person1 = new Person("Byiringiro", "Urban", 22);
// const person2 = new Person("Mugisha", "Gentil", 21);
// const person3 = new Person("Niyonkuru", "Patrick", 18);
// console.log(person1.firstName)
// console.log(person2.firstName)
// console.log(person3.firstName)
// console.log(person2.lastName)

// const person = {
//     name:"urban", 
//     age: 22, 
//     isEmployed: false,
//     isStudent: true
// }
// console.log(person.name)

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervaId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider)

// function initializeSlider(){
//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//         setInterval(nextSlide, 5000);
//     }
// }
// function showSlide(index){
//     if(index >= slides.length){
//         slideIndex = 0;
//     }else if(index < 0){
//         slideIndex = slides.length - 1;
//     }
//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }
// function prevSlide(){
//     slideIndex--;
//     showSlide(slideIndex);
// }
// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }


// function task1 (callBack){ 

//     setTimeout(() =>{
//         console.log("task 1 complete");
//         callBack;
//     }, 2000)
// }
// function task2 (callBack){ 
//     setTimeout(() =>{
//         console.log("task 2 complete");
//         callBack;
//     }, 3000)
// }
// function task3 (callBack){ 
//     setTimeout(() =>{
//         console.log("task 3 complete");
//         callBack;
//     }, 4000)
// }
// function task4 (callBack){ 
//     setTimeout(() =>{
//         console.log("task 4 complete");
//         callBack;
//     }, 5000)
// }
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("all tasks are chores"))
//         })
//     })
// })
// task1();
// task2();
// task2();
// task3();
// task4();



                            // PROMISE 

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = false;
//             if(dogWalked){
//                 resolve("you walk the dog🐕‍🦺");
//             }else{
//                 reject("you didn't walk the dog")
//             }
           
//         }, 1500);
//     });
// }
// function cleanKitchen(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const cleanedKichen = false;
//         if(cleanedKichen){
//             resolve("you are cleaning kitchen 🧨");
//         }else{
//             reject("you didn't clean kitchen")
//         }
       
//     }, 2500)
//   })
// }
// function takeOutTrush(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trushed = false;
//             if(trushed){
//                 resolve("you are take out the truck🥥");
//             }else{
//                 reject("you didn't take out the trush")
//             }
            
//         }, 500);
//     })  
// }
// walkDog().then(value => {console.log(value); return cleanKitchen})
// cleanKitchen().then(value => {console.log(value);  return takeOutTrush})
// takeOutTrush().then(value =>{ console.log(value); console.log("you finish all chores")});
// walkDog().catch(error => console.error(error));
// cleanKitchen().catch(error => console.error(error));
// takeOutTrush().catch(error => console.error(error));

// const person1 = {
//     name: "Urban",
//     age: 22,
//     isStudent: true,
//     isEmployed: false
// }
// const person2 = {
//     name: "Gentil",
//     age: 22,
//     isStudent: true,
//     isEmployed: true
// }
// const{name, age, isStudent, isEmployed} = person2;
// console.log(name) 


// const getData = async () => {
//     let data = "you are displaying as I invoke you";
//     return data;
// }
// getData().then(data => console.log(data))


// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;
//             if(dogWalked){
//                 resolve("you walked the dog 🐕🐕🐕");
//             }else{
//                 reject("you DIDN'T walked the dog 🐕🐕🐕");
//             }
//         }, 3000);
//     })
// }
// function cleanedKichen(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             const cleanKitchen = true;
//             if(cleanKitchen){
//                 resolve("you have cleaned kitchen");
//             }else{
//                 reject("you DIDN'T cleaned kitchen");
//             }
//         }, 4000);
//     })
// }
// function takeOutTrush(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trushedTakeOut = true;
//         if(trushedTakeOut){
//             resolve("you take out the trush");
//         }else{
//             reject("you Didn't take out the trush");
//         }
//         }, 5000);
//     })
// }
// // walkDog().then(value => console.log(value));
// // cleanedKichen().then(value => console.log(value));
// // takeOutTrush().then(value => console.log(value));


//  async function display(){
//  try{
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanedKichenResult = await cleanedKichen();
//     console.log(cleanedKichenResult);

//     const takeOutTrushResult = await takeOutTrush();
//     console.log(takeOutTrushResult);
//  }
//  catch(error){
//     console.error(error)
//  }
// }
// display();

// function display(){
//     const firstPromise = new Promise((resolve, reject) => {
//         resolve("hello urbaan you deserve it");
//     });
//     const secondPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("you are the best");
//         }, 1000)
//     })
//     const combinedPromise = Promise.all([firstPromise, secondPromise]);
//     return combinedPromise;
// }
// async function result(){
//     const displayResult = await display();
//     console.log(displayResult);
// }
// result()

// const result = async () =>{
//     const data = "urban";
//     return data;
// }
// result().then(value => console.log(value));

// const peaple = [
//     {
//         names: "urban",
//         age: 22, 
//         isEmployed: false
//     },
//     {
//         names: "Gentil",
//         age: 23, 
//         isEmployed: true
//     },
//     {
//         names: "lena",
//         age: 12, 
//         isEmployed: false
//     },
//     {
//         names: "pazzo",
//         age: 18, 
//         isEmployed: false
//     }
    
// ]
// const jsonString = JSON.stringify(peaple );
// console.log(jsonString)

// const jsonNames = `["urban", "owen", "lena", "gaella"]`;
// const jsonPerson = `{ "name": "Urban", "age": 22, "isEmployed": false}`;
// const jsonPeaple = `[{ "name": "gentil", "age": 23, "isEmployed": true},
//                     {"name": "lena", "age": 12, "isEmployed": false},
//                     {"name": "cyusa", "age": 21,"isEmployed": true},
//                     {"name": "Urban", "age": 22,"isEmployed": false}]`;

// const parseData = JSON.parse(jsonPeaple);
// console.log(jsonPeaple);

fetch("person.json")
person.json.then(Response => Response.json())
person.json.then(value => console.log(value))


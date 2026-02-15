/**
 * ? i will assume u have learn some of this knowledge 
 * ? destructuring is a way to extract value from array or object and assign it to variable
 * ? spread operator is a way to expand array or object into individual element or it is to copy value to other object or array
 * ? rest operator is a way to collect multiple element into array or object
 * ? regex is a pattern that we can use to match character in string
 * ? we can use regex to validate email, phone number, password, etc
 * ? we can also use regex to replace character in string 
 * ? https://regexr.com/ is a website that we can use to test our regex pattern 
 * ? https://www.w3schools.com/jsref/jsref_obj_regexp.asp 
 * ? in this file i will give share my knowledge about javascript
 * ? oop[object oriented programming] why i avoid multiple inheritance and use composition instead
 * ?i use 1 principle of oop wich is single responsibility principle, i will create class for each responsibility and use composition to combine them in solid have 5 principle of oop which is single responsibility principle, open closed principle, liskov substitution principle, interface segregation principle, dependency inversion principle i not yet learn all of them i only learn single responsibility principle because it is simplify my code and make it more maintainable and reusable
 * ?functional programming is your code should not change value of variable but your code should proccess the value of variable through argument and should not modify value from outside of function and also dont change dom make http request to api such as delete post request update patch 
 * ? imperative programming is your code should change value of variable and also change dom make http request to api such as delete post request update patch
 * ?declarative programming is your code should not change value of variable and also change dom make http request to api such as delete post request update patch
 * ? asynchronous programming is your code should not block the main thread and also should not change value of variable and also should not change dom make http request to api such as delete post request update patch
 * ? synchronous programming is your code should block the main thread and also should change value of variable and also should change dom make http request to api such as delete post request update patch
 * ?thread is a unit of excecution in a program 
 */
class Basic{
    dataType(){
        //console.log to print to the console of html u can see by right click and inspect element and go to console tab
        console.log("string");
        console.log(123);//number
        console.log(true);//boolean true false
        console.log(null);//null is a value that represent no value or empty value
        console.log(undefined);//value that is not defined or not assigned to variable
        console.log({name: "john", age: 20});//pair of key value
        console.log([1, 2, 3, 4, 5]);//array is like collection of data 
        
        //? data is representation of real world like your age is data
        // variable
         const name = "john"; //? const is a variable that store value const mean the value cannot be changed let mean the value can be changed
        //if else else if is conditional statement
        if(name === "john"){
            console.log("hello john");
        }else if(name === "doe"){
            console.log("hello doe");
        }else{
            console.log("hello stranger");
        }


        // ? let make else if more nice with this methode
        const jaka="jaka@gmail.com"
        const validation=[
            [/\w+gmail.com/g,"it is gmail"]
        ]
        //?destructuring an array multidimension
        const [ regex,message=idx0]=validation
        if(regex.test(jaka)){
            console.log(message);
        }
        const hobby="coding"
        if(hobby.includes("c")){
            console.log("you mean ",hobby)
        }else{
            console.log("unknown hobby ")
        }

        //destructuring an object
        const person={
            name_person:"john",
            age:20,
            email:"mirajons.gmail.com"
    }
    const {name_person,age,email}=person
    const validate_age={
        20:"you are 20 years old",
        30:"you are 30 years old"
    }
    if(validate_age[age]){
        console.log(validate_age[age]);
        console.log("u are can go ride a car");
    }else{
        console.log("u are too young to ride a car or u are too old to ride a car");
    }
}

loops(){
    //loops is code that is used to repeat a block of code until a certain condition is met
    for(let i=0;i<=100;++i){
        //? if statement is used to check condition if condition is true then the code inside if statement will be executed if condition is false then the code inside if statement will not be executed
        //can divided by 2
        if(i%2===0){
            console.log("it is even number ",i);
        }
    }
}

functions(){
    //? function is a block of code that is used to perform a specific task and also it is used to reuse code and also it is used to organize code and also it is used to make code more readable and also it is used to make code more maintainable and also it is used to make code more reusable
    //?make your code more organize with function
    
    //? function as argument  
    //? anonimus function
    const name=function(name){
        console.log("hello my name is ",name);
    } 
    //? arrow function 
    const calculate=(a,b,callback)=>{
        callback({a,b});
    }
    const add=calculate(1,2,({a,b})=>{
        console.log("the sum is ",a+b);
    })

}

}

class SpreadOperator{
    constructor(){
            this.data1=[1,2,3]
            this.data2=[4,5,6]
    }

    spreaded(){
        const datas=[...this.data1,...this.data2]
        return datas
    }
}


class Dom{
    info(){
        "dom is document object module it represent html document in javascript we can use dom to manipulate html document such as add, remove, update element in html document and also we can use dom to get element from html document such as get element by id, class, tag name, etc "
        "attribute is in element html that contain information like <el attribute='value'></el> for example <span class='spandex' data-str='true'></span>"
        "the best way to learn coding is is to analize others people code "
    }
    resource(){
        "visit"
        "w3school is a website that provide tutorial and reference about web development such as html, css, javascript, etc and also it provide example and exercise to practice coding"
    }
    $(selector){
        //to select element html use querySelector and to select element html in multiple element use querySelectorAll
        //? . for class # for id and tag name for tag name
        return document.querySelector(selector);
    }
}

class AsynApiCall{
    async getData(){
        //? fetch is a method that is used to make http request to api and also it is used to get data from api and also it is used to send data to api and also it is used to delete data from api and also it is used to update data from api
        //? fetch return a promise that is a object that represent the eventual completion or failure of an asynchronous operation and its resulting value
        try{
            //?by default program is synchronous it mean the code is blocking until it is finish and execute the next code but with asynchronous it mean the code is non blocking and not wait until it is finish to execute code
            
            //?await keyword is used to make asynchronous code like synchronous code 
            //?i will explain in weeebos language so asynchronous like u send by other person to isekai world to become hero so your friends will not wait until tou come back they will be do what they like
            /**
             * 1.asynchronous without await keyword or then method is like u send by other person to isekai world to become hero so your friends will not wait until tou come back they will be do what they like
             * 1.1 with await keyword or then method is like your friends are waiting for you to return 
             * 2.1 without await keyword u cannot get value of asynchronous code because the program ignore it ,it is because asynchronous code is value that in the future 
             * 2.2 with await keyword ot is like waifu that is promised to you so u must wait for her to come to you and u can marry her when she come to you
             *  */ 
            const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
            const data=await response.json()
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }
}

/**
 * *materials
 * *basic v
 * *oop v
 * *dom v
 * *asyncronous v
 * *destructuring v
 * *spread operator v
 * *function as argument v
 */

/*
  *? lets start with the oop 
  *? with oop your code is very neat and also easy to maintain and reusable 
   *? let implement single responsibility principle with oop  
*/

//todo inheritance 
// ? inheritance is a way that we can access property and method from parent class to child class and also we can override method from parent class in child class and also we can add new method in child class without affecting parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
//?dog is become child class of animal and animal is parent class 
//? class that extended from another class is called subclass  like subbclass or child class extends parent class 
//? well if we take a look another programming language that support multipple iheritance like c++ when we call function that has the same name the program will be confused hei this function is from what class because some class have the same function so composition come to play 
//? with composition we can know this function is from what class because we create object from class and call function from object so we can know this function is from what class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); //? super is used to call parent class constructor and also it is used to call parent class method
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}

class Talk{
    //?it is called destructuring it is a way to extract value from object and assign it to variable and also it is a way to extract value from array and assign it to variable or argument or parameter
    constructor({name}){
        this.name = name;
    }
    talk(){
        //? this is called string interpolation it is a way to embed expression in string and also it is a way to concatenate string and also it is a way to format string and u can insert variable in string without using + operator
        console.log(`${this.name} is talking...`);
    }
}

class Walk{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log(`${this.name} is walking...`);
    }
}

//? lets overide the function from parent class in child class
class Read{
    read(){
        console.log("i am reading");
    }
}
//? when we create class it is best practice to give its classname a cammelcase 
class Aisatsu extends Read{
    //? composition is to avoid diamond problem[when we have multiple inheritance proram will be confused if some class have the same function name] luckily javascript does not support multiple inheritance so i can use composition to mimic multiple inheritance so i can see and debug this function is belongs to what class  
    constructor(name){
        this.name = name;
        this.talk = new Talk({name: this.name});
        this.walk = new Walk(this.name);
    }
    //? by create same name class we overide the function from parent class in child class and also we can add new function in child class without affecting parent class
    read(){
        console.log(`${this.name} is reading`);
    }
    talk(){
        //? this function is belongs to class talk
        this.talk.talk();
    }
    walk(){
        this.walk.walk();
    }
    aisatsu(){
        this.talk.talk();
        this.walk.walk();
        console.log(`hello my name is ${this.name} nice to meet you`);
    }

}

//? lets start what is the meaning of srp or single responsibility principle it is a principle that class should have only one responsibility like Api class should have responsible to handle the 4 http request 
class Api{
    post(){
        console.log("post request");
    }
    get(){
        console.log("get request");
    }
    delete(){
        console.log("delete request");
    }
    patch(){
        console.log("patch request");
    }
    update(){
        console.log("update request");
    }   
}

//? example of wrong code that violate srp
class notification{
    sendEmail(){
        console.log("send email");
    }
    sendSms(){
        console.log("send sms");
    }
    manipulateDom(){
        console.log("manipulate dom");
    }
    sendApiRequest(){
        console.log("send api request");
    }
}


class Person {
    constructor(name, age) { //? it called constructor it is a special method that is called when we create an object from class and it is used to initialize the object
        this.name = name; //?this.name is called property and name is called parameter
        this.age = age;
        //?this code will always run when we create the object from class
        console.log("we will run when u create object from class");
    }
    //? private method is a method that can only be accessed from within the class and it is denoted by # before the method name it mean u cant access this method from outside of class and also u cant access this method from subclass
    //? return statement is used to return value from function and also it is used to exit from function when return statement is executed the code after return statement will not be executed and return statement make your function can be calculated or get the value 
    #getName() {
        return this.name;
    }
    #getAge() {
        return this.age;
    }

    aisatsu(){
        console.log(`hello my name is ${this.#getName()} and i am ${this.#getAge()} years old`);
    }

}



// ensure that dom is loaded before we run our code
//dom is document object model it is a representation of html document in javascript we can use dom to manipulate html document such as add, remove, update element in html document and also we can use dom to get element from html document such as get element by id, class, tag name, etc 
document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded');
  // your code here
  const person1 = new Person("john", 20);
        person1.aisatsu(); 
})
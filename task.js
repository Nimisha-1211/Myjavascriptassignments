// // **************TASK 11**************
// // implicit coercion means datatype will automatically change
// console.log('A'-1) 
// // output:- NaN
// console.log('A'+1)
// // outpout:-A1
// console.log(2+'2'+'2')
// // output:-222
// console.log('hello'+'world'+89)
// // output:-helloworld89
// console.log('hello'-'world'+89)
// // output:-NaN
// console.log('hello'+78)
// // output:-hello78
// console.log('78'-90+'2')
// // output:- -122
// console.log(2-'2'+90)
// //output:-90
// console.log(89-'90'/2)
// //output:- 44
// console.log((true==false)>2)
// //output:-false
// //************TASK12********************
// // TASK 12(1):-

// let str= 'gfuh ieiuei';
// console.log(str.slice(0,6));
// //output:- gfuh i

// // TASK 12(2):-
// let str1='hduej dij';
// console.log(str1.length)
// console.log(str1.toUpperCase())

// //output:-
// // 9
// // HDUEJ DIJ

// //TASK 12(3):-
// let str2= " biji jdo "
// console.log(str2.trim())
// console.log(str2.toLowerCase())
// // 12(4):-
// let str3='Hello,World'
// console.log(str3.replace(",","-"))
// //output:- Hello,World

// //TASK 12(4):-
// console.log(89 + 'hello' + 90 / 9)

// //************TASK13********************
// //TASK 13(1):-
// const animal={
//   name:'dog',
//   breed:'germanshepherd',
// }
// console.log(animal.name)
// const car={
//   name:'Nano',
//  brand:'Tata',
// }
// console.log(car.brand)

// //output:- 

// //TASK 13(2):-
// const str4='programming'
// const arrayOfstr=str4.split('')
// console.log(arrayOfstr)
// const duplicates=[]
// console.log(arrayOfstr.indexOf('p'))
// console.log(arrayOfstr.lastIndexOf('p'))
// arrayOfstr.forEach(ele1=>{
//   if(arrayOfstr.indexOf(ele1)!==arrayOfstr.lastIndexOf(ele1)&& !duplicates.includes(ele1))
//   {
//     duplicates.push(ele1)
//   }
// })
// console.log('Duplicates:', duplicates);
// //output:- Duplicates: [ 'r', 'g', 'm' ]


// //TASK 13(3)

// let srt5="JavaScript"
// let arr=(srt5.split(''))
// let reversearr=arr.reverse()
// console.log(reversearr,"reverse")
// let final_arr=reversearr.join()
// console.log(final_arr)
// //output:-t,p,i,r,c,S,a,v,a,J

// //TASK 13(4)
// let arr1=[1,2,3,4,5,6,7]
// let maximum=Math.max(...arr1)
// console.log(maximum)
// let minimum=Math.min(...arr1)
// console.log(minimum)
// //output:- 7

// //TASK 13(5)
// let arr2=[1,5,2]
// console.log(arr2.sort((a,b)=>a-b))
// console.log(arr2.sort((a,b)=>b-a))
// //output:-
// [ 1, 2, 5 ]
// [ 5, 2, 1 ]

// //TASK 13(6)

// let arr3=[1,2,3,4,5,6,7,8]
// console.log(arr3.slice(0,3))
// //output:-[1,2,3]

//TASK 13(7)
// let arr4=[1,2,3,4,5,6,7,8]
// arr4.splice(4,1,10,11)
// console.log(arr4)
// //output:-
// [
//    1, 2, 3, 4, 10,
//   11, 6, 7, 8
// ]
// **************TASK 14************
// TASK 14(1)
// function myFun(a,b,c){
//   console.log(a*b*c)
// }
// myFun(2,3,4)
// //Output:- 24

// TASK 14(2)
// function myFun(a,b){
//   console.log(a/b)
// }
// myFun(10,2)
// //Output:- 5

// TASK 14(3)
// let div=document.getElementById("container")
// div.style.backgroundColor="blue"

//TASK 14(4)
// let div =document.getElementById("container")
// let r=Math.floor(255*Math.random())
// let g=Math.floor(255*Math.random())
// let b=Math.floor(255*Math.random())
// div.style.backgroundColor=`rgb(${r},${g},${b})`
// //TASK 14(5)
// const modal= document.getElementById("myModal")
// button.addEventListener("click",function(){
//   console.log("button is clicked")
// })
// window.addEventListener("load",function(){
//   modal.style.display="block"
// })
// function onClose(){
//   modal.style.display="none"
// }
// ****************TASK 15*******************
// TASK 15(1)
// function check(){
//   let Mynum =document.getElementById("mynum").value
//   let num=parseInt(Mynum)
//  if (num%3==0){
//   console.log("Number is divisible by 3")
//  }

// else{
//   console.log("Number is not divisible by 3")
// }

// }
//TASK 15(2)
// function check(){
// let Mytext =document.getElementById("mytext").value
// if(Mytext.includes("js")){
//   console.log("Text includes 'js'")
// }else{
//   console.log("Text does not include 'js'")
// }
// }
//TASK 15(3)
// function check(){
// let p =parseFloat(document.getElementById("principal").value)
// let r =parseFloat(document.getElementById("rate").value)
// let t =parseFloat(document.getElementById("time").value)
// let simpleinterest=(((p/r)*t)/100)

// console.log(simpleinterest)
// }
// **************TASK16****************
// TASK 16(1)
//  function check(){
// let n =parseInt(document.getElementById("number").value)
// for(let i=1;i<=n;i++){
//   if(i%2==0)
//   {
//  console.log(i)
//   }
 
// }
//  }
//TASK 16(2)
// function check(){
// let n =(document.getElementById("char").value)
// if (n==="a"||n==="e"||n==="i"||n==="o"||n==="u"){
//   console.log("char is vowel")
// }
//   else{
//     console.log("char is consonent")
//   }
//TASK 16(3)
// function countEvenOdd(){
// let evenCount=0
// let oddCount=0
// for(let i=1;i<=999;i++){
//   if(i%2==0){
//     evenCount++
//   }
// else{
//   oddCount++
// }}
// console.log("Even number count:",evenCount)
// console.log("Odd number count:",oddCount)
// }
//TASK 16(4)
// let string="hello"
// let count=0
// for(let i=0;i<string.length;i++){
//   if(string[i]==="l"){
//     count++
//   }
//   }
// console.log(count)
//TASK 16(5)
// let arr=[1, 9, 8];
// let sum=0
// for(let i=0;i<arr.length;i++)
// {
// sum=sum+(arr[i])
// }
// let average=sum/arr.length

// console.log("sum of array is",sum)
// console.log("average of array is",average)
// TASK 16(6)
//  let arr=[1, 9, 8];
//  let largest=arr[0]
//  for(i=0;i<arr.length,i++){
//   if (arr[i]>arr[0])
//   {
//     largest=arr[i]
//   }

//  }
//  console.log("largest number is ",largest)
  
// ***************TASK17*************

// const mainDiv=document.createElement("div")
// mainDiv.style.gap="100px"
// mainDiv.style.display="flex"
// mainDiv.style.justifyContent="center"
// mainDiv.style.marginTop="20px"


// const newDiv1=document.createElement("div")
// newDiv1.textContent="This is box 1"
// console.log(newDiv1)
// newDiv1.style.backgroundColor="brown"
// newDiv1.style.width="200px"
// newDiv1.style.height="200px"
// newDiv1.style.textAlign="center"


// const newDiv2=document.createElement("div")
// newDiv2.textContent="This is box 2"
// console.log(newDiv2)
// newDiv2.style.backgroundColor="pink"
// newDiv2.style.width="200px"
// newDiv2.style.height="200px"
// newDiv2.style.textAlign="center"


// const newDiv3=document.createElement("div")
// newDiv3.textContent="This is box 3"
// console.log(newDiv1)
// newDiv3.style.backgroundColor="blue"
// newDiv3.style.width="200px"
// newDiv3.style.height="200px"
// newDiv3.style.textAlign="center"


// mainDiv.appendChild(newDiv1)
// mainDiv.appendChild(newDiv2)
// mainDiv.appendChild(newDiv3)


// document.body.appendChild(mainDiv)
// ***************TASK18*************
// function validateForm() {
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const contact = document.getElementById("number").value.trim();
//   const age = document.getElementById("age").value.trim();
//   const designation = document.getElementById("designation").value.trim();
//   const dob = document.getElementById("date").value;
//   const files = document.getElementById("file").files;

//   let error = "";

//   if (name === "") {
//     error += "Name is required.<br>";
//   }

//   if (email === "") {
//     error += "Email is required.<br>";
//   } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//     error += "Invalid email format.<br>";
//   }

//   if (contact === "") {
//     error += "Contact is required.<br>";
//   } else if (!/^\d{10}$/.test(contact)) {
//     error += "Contact number must be 10 digits.<br>";
//   }

//   if (age === "") {
//     error += "Age is required.<br>";
//   } else if (age < 18 || age > 99) {
//     error += "Age must be between 18 and 99.<br>";
//   }

//   if (designation === "") {
//     error += "Designation is required.<br>";
//   }

//   if (dob === "") {
//     error += "Date of Birth is required.<br>";
//   }

//   if (files.length === 0) {
//     error += "Please upload at least one file.<br>";
//   }

//   document.getElementById("errorMsg").innerHTML = error;

//   return error === "";
// }
//  ***************TASK19*************
// 19(2)
// function getUserData(fun){
//   const data=5;
//   fun(data)
// }
// function second(data){
//   console.log(data)
// }
// getUserData(second)
// **********TASK20*************
// TASK 20(1)
// const arr=[10,20,32,66]
// const filteredData=arr.filter((ele,index)=>{
//   return ele>20
// })
// console.log(filteredData[0])
// TASK 20(2)
// const arr=[10,20,32,66]
// const filteredData=arr.find((ele,index)=>
// {
//   return ele<20
// })
// console.log(filteredData)
// TASK 20(3)
// const users=[
//   {id:1,name:'sadhik'},
//   {id:2,name:'hemanth'},
//   {id:3,name:'bhanu'},
//   ];
//   const filteredData=users.filter((ele,index)=>{
//     return ele.id===3;
//   }
// )
// console.log(filteredData)
// TASK 20(4)
// let arr = [90, 89, 56, 45];

// arr.forEach(ele => {
//   if (ele % 2 === 0) {
//     console.log(ele, "is Even");
//   } else {
//     console.log(ele, "is odd");
//   }
// });
// TASK 20(5)
// class Book {
//   constructor(number_of_pages, type_of_pages, author) {
//     this.number_of_pages = number_of_pages;
//     this.type_of_pages = type_of_pages;
//     this.author = author;
//   }

//   type_of_book() {
//     console.log("Number of pages is", this.number_of_pages);
//     console.log("Type of pages is", this.type_of_pages);
//     console.log("Author is", this.author);
//   }
// }

// const data = new Book(100, "binded", "William");

// data.type_of_book();
// TASK 20(6)
// class Animal {
//   constructor(name, gender, disease) {
//     this.name = name;
//     this.gender = gender;
//     this.disease = disease;
//   }

//   walk() {
//     console.log(this.name + " is walking.");
//   }

//   eat() {
//     console.log(this.name + " is eating.");
//   }

//   climb() {
//     console.log(this.name + " is climbing.");
//   }

//   details() {
//     console.log("Name: " + this.name);
//     console.log("Gender: " + this.gender);
//     console.log("Disease: " + this.disease);
//   }
// }
// const monkey = new Animal("Monkey", "Female", "Cold");
// monkey.details();
// monkey.walk();
// monkey.eat();
// monkey.climb();